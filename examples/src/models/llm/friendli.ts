import { Friendli } from "@langchain/community/llms/friendli";

const model = new Friendli({
  model: "mixtral-8x7b-instruct-v0-1", // Default value
  friendliToken: process.env.FRIENDLI_TOKEN,
  friendliTeam: process.env.FRIENDLI_TEAM,
  maxTokens: 1024,
  temperature: 0.85,
  topP: 0.95,
  frequencyPenalty: 0,
  stop: [],
});

const response = await model.invoke(
  "Generate a customer persona for someone passionate about sustainability. Explore their values, lifestyle choices, and preferences in sustainable products."
);

console.log(response);

/*
Values:
- Environmental preservation and restoration
- Social equality
- Ethical consumerism
...
*/

const stream = await model.stream(
  "Generate a customer persona for someone passionate about sustainability. Explore their values, lifestyle choices, and preferences in sustainable products."
);

for await (const chunk of stream) {
  console.log(chunk);
}

/*
  Hello
  !
   I
  '
  m
  ...

  focus
  ed
   consumers
  .
*/
