import { LLM } from "@/types"

const PERPLEXITY_PLATFORM_LINK =
  "https://docs.perplexity.ai/docs/getting-started"

// Perplexity Models (UPDATED 10/17/24) -----------------------------
// Model Deprecation Notice
// Please note that the following models have been deprecated:
// pplx-70b-chat, pplx-70b-online, llama-2-70b-chat, codellama-34b-instruct.

// Llama 3.1 Sonar Small Online
const LLAMA_3_1_SONAR_SMALL_128K_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-small-128k-online",
  modelName: "Llama 3.1 Sonar Small 128K Online",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-small-128k-online",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 Sonar Large Online
const LLAMA_3_1_SONAR_LARGE_128K_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-large-128k-online",
  modelName: "Llama 3.1 Sonar Large 128K Online",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-large-128k-online",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 Sonar Huge Online
const LLAMA_3_1_SONAR_HUGE_128K_ONLINE: LLM = {
  modelId: "llama-3.1-sonar-huge-128k-online",
  modelName: "Llama 3.1 Sonar Huge 128K Online",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-huge-128k-online",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 Sonar Small Chat
const LLAMA_3_1_SONAR_SMALL_128K_CHAT: LLM = {
  modelId: "llama-3.1-sonar-small-128k-chat",
  modelName: "Llama 3.1 Sonar Small 128K Chat",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-small-128k-chat",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 Sonar Large Chat
const LLAMA_3_1_SONAR_LARGE_128K_CHAT: LLM = {
  modelId: "llama-3.1-sonar-large-128k-chat",
  modelName: "Llama 3.1 Sonar Large 128K Chat",
  provider: "perplexity",
  hostedId: "llama-3.1-sonar-large-128k-chat",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 8B Instruct
const LLAMA_3_1_8B_INSTRUCT: LLM = {
  modelId: "llama-3.1-8b-instruct",
  modelName: "Llama 3.1 8B Instruct",
  provider: "perplexity",
  hostedId: "llama-3.1-8b-instruct",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

// Llama 3.1 70B Instruct
const LLAMA_3_1_70B_INSTRUCT: LLM = {
  modelId: "llama-3.1-70b-instruct",
  modelName: "Llama 3.1 70B Instruct",
  provider: "perplexity",
  hostedId: "llama-3.1-70b-instruct",
  platformLink: PERPLEXITY_PLATFORM_LINK,
  imageInput: false
}

export const PERPLEXITY_LLM_LIST: LLM[] = [
  LLAMA_3_1_SONAR_SMALL_128K_ONLINE,
  LLAMA_3_1_SONAR_LARGE_128K_ONLINE,
  LLAMA_3_1_SONAR_HUGE_128K_ONLINE,
  LLAMA_3_1_SONAR_SMALL_128K_CHAT,
  LLAMA_3_1_SONAR_LARGE_128K_CHAT,
  LLAMA_3_1_8B_INSTRUCT,
  LLAMA_3_1_70B_INSTRUCT
]
