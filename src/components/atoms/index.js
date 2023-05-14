import { lazy } from "react";
const Title = lazy(() => import("./Title"));
const Button = lazy(() => import("./Button"));
const Icon = lazy(() => import("./Icon"));
const EmptyState = lazy(() => import("./EmptyState"));
const LoadingSpinner = lazy(() => import("./LoadingSpinner"));
const Checkbox = lazy(() => import("./Checkbox"));
const Label = lazy(() => import("./Label"));

export { Title, Button, Icon, EmptyState, LoadingSpinner, Checkbox, Label };
