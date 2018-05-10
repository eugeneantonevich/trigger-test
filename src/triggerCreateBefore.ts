import fetch from "node-fetch";
import * as neo from "neo-api";

export default async (args: any, context: any): Promise<any> => {
  console.log("trigger before!");
  
  try {
    console.log("get node");
    const node = neo.node('http://www.antchain.org/api/v1/');

    console.log("get count");

//    const blockCount = await node.getBlockCount();
//    console.log(blockCount);

    // console.log("get last");
    // const last = await node.getLastBlockHash();

    // console.log(last);
  
    return {
      data: {
        pretrigger: "pretest"
      }
    };  
  } catch(ex){
    console.log(ex.message);
  }

  return {
    ...args
  }
};