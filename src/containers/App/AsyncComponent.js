import { lazy } from "react";

export const AsyncHome = lazy(() => import('../../containers/Home'))
export const AsyncNotFound = lazy(() => import('../../components/exceptions/NotFound'))