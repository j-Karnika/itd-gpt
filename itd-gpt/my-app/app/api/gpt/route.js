import readline from 'readline';
import { OpenAI } from '@langchain/openai';
import { BufferMemory } from 'langchain/memory';
import { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";
import { ConversationChain } from 'langchain/chains';
import Redis from "ioredis";
import { NextResponse } from 'next/server';

const client = new Redis("rediss://default:88712ef439f84ca7b7d37dee7f9ab7bf@usw1-innocent-anemone-33933.upstash.io:33933");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const model = new OpenAI({
  temperature: 0,
});

const memory = new BufferMemory({
  chatHistory: new RedisChatMessageHistory({
    sessionId: "test",
    sessionTTL: 300,
    client
  }),
});

const chain = new ConversationChain({
  llm: model,
  memory: memory
});

export const POST= async(req, res)=> {
  const  {msg}  = await req.json();
  // console.log(req.body);
  console.log("msg", msg);

  while (true) {
    const response = await chain.call({
      input: msg,
    });

    // console.log('AI:', response);
    // const data = await response.json();


    // if (response.finished) {
    //   break;
    // }
    return NextResponse.json(response)
    // return response.response
  }

}



// import readline from 'readline';
// import { OpenAI } from 'langchain/llms/openai';
// import { SQLiteEntityStore } from 'langchain/memory/entity';
// import { ConversationChain } from 'langchain/chains';
// import * as dotenv from "dotenv";
// dotenv.config();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const model = new OpenAI({
//   temperature: 0,
// });

// const entityStore = new SQLiteEntityStore();
// const memory = new ConversationEntityMemory({
//   llm: model,
//   entityStore: entityStore
// });

// const chain = new ConversationChain({
//   llm: model,
//   memory: memory
// });

// async function chatWithAI() {
//   while (true) {
//     const userInput = await new Promise((resolve) => {
//       rl.question('User: ', (answer) => {
//         resolve(answer);
//       });
//     });

//     const response = await chain.call({
//       input: userInput,
//     });

//     console.log('AI:', response.response);

//     // Exit the loop if the conversation is finished
//     if (response.finished) {
//       break;
//     }
//   }

//   rl.close();
// }

// chatWithAI();