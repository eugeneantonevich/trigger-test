import fetch from "node-fetch";

export default async (args: any, context: any): Promise<any> => {
  console.log("trigger after!");
  const resp = await fetch("https://github.com/");
  console.log("fetch complete!", resp);
  return {
      ...args,
      pretrigger: JSON.stringify(resp, null, 2),
      postrigger: "posttrigger!"

  };
};