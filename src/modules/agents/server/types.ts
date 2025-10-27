import { inferRouterInputs } from "@trpc/server";
import type { AppRouter } from "@/trpc/routers/_app";

export type AgentGetOne = inferRouterInputs<AppRouter>["agents"]["getOne"];