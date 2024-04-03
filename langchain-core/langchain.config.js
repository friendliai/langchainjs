import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * @param {string} relativePath
 * @returns {string}
 */
function abs(relativePath) {
  return resolve(dirname(fileURLToPath(import.meta.url)), relativePath);
}

export const config = {
  internals: [/node\:/, /js-tiktoken/],
  entrypoints: {
    agents: "agents",
    caches: "caches",
    "callbacks/base": "callbacks/base",
    "callbacks/manager": "callbacks/manager",
    "callbacks/promises": "callbacks/promises",
    chat_history: "chat_history",
    documents: "documents/index",
    embeddings: "embeddings",
    example_selectors: "example_selectors/index",
    "language_models/base": "language_models/base",
    "language_models/chat_models": "language_models/chat_models",
    "language_models/llms": "language_models/llms",
    load: "load/index",
    "load/serializable": "load/serializable",
    memory: "memory",
    messages: "messages/index",
    output_parsers: "output_parsers/index",
    "output_parsers/openai_tools": "output_parsers/openai_tools/index",
    "output_parsers/openai_functions": "output_parsers/openai_functions/index",
    outputs: "outputs",
    prompts: "prompts/index",
    prompt_values: "prompt_values",
    runnables: "runnables/index",
    "runnables/remote": "runnables/remote",
    retrievers: "retrievers",
    singletons: "singletons/index",
    stores: "stores",
    tools: "tools",
    "tracers/base": "tracers/base",
    "tracers/console": "tracers/console",
    "tracers/initialize": "tracers/initialize",
    "tracers/log_stream": "tracers/log_stream",
    "tracers/run_collector": "tracers/run_collector",
    "tracers/tracer_langchain": "tracers/tracer_langchain",
    "tracers/tracer_langchain_v1": "tracers/tracer_langchain_v1",
    "utils/async_caller": "utils/async_caller",
    "utils/beta_warning": "utils/beta_warning",
    "utils/chunk_array": "utils/chunk_array",
    "utils/env": "utils/env",
    "utils/event_source_parse": "utils/event_source_parse",
    "utils/function_calling": "utils/function_calling",
    "utils/hash": "utils/hash",
    "utils/json_patch": "utils/json_patch",
    "utils/json_schema": "utils/json_schema",
    "utils/math": "utils/math",
    "utils/stream": "utils/stream",
    "utils/testing": "utils/testing/index",
    "utils/tiktoken": "utils/tiktoken",
    "utils/types": "utils/types/index",
    vectorstores: "vectorstores",
  },
  tsConfigPath: resolve("./tsconfig.json"),
  packageSuffix: "core",
  cjsSource: "./dist-cjs",
  cjsDestination: "./dist",
  abs,
}