import { lazy } from "react";
// import Title from "./Title";
// import Button from "./Button";
// import Icon from "./Icon";
// import EmptyState from "./EmptyState";
// import LoadingSpinner from "./LoadingSpinner";
// import Checkbox from "./Checkbox";

const Title = lazy(() => import("./Title"));
const Button = lazy(() => import("./Button"));
const Icon = lazy(() => import("./Icon"));
const EmptyState = lazy(() => import("./EmptyState"));
const LoadingSpinner = lazy(() => import("./LoadingSpinner"));
const Checkbox = lazy(() => import("./Checkbox"));
const Label = lazy(() => import("./Label"));

export { Title, Button, Icon, EmptyState, LoadingSpinner, Checkbox, Label };
