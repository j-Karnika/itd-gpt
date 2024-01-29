import readline from "readline";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";
import { ConversationChain } from "langchain/chains";
import * as dotenv from "dotenv";
import Redis from "ioredis";

const client = new Redis(
  "rediss://default:88712ef439f84ca7b7d37dee7f9ab7bf@usw1-innocent-anemone-33933.upstash.io:33933",
);

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new OpenAI({
  temperature: 0,
});

const memory = new BufferMemory({
  chatHistory: new RedisChatMessageHistory({
    sessionId: "test",
    // Or some other unique identifier for the conversation
    sessionTTL: 300, // no. of seconds the sesssion ID data should be stored in database.
    client,
  }),
});

const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

app.post("/api/chat", async (req, res) => {
  const userInput = req.body.input;

  const response = await chain.call({
    input: userInput,
  });
  
  const aiResponse = "This is the AI response";

  res.status(200).json({ response: aiResponse });
});
