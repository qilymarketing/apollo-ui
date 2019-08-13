import { useContext } from "react";
import { EventsContext } from "./Events";

function useEvents() {
  return useContext(EventsContext);
}

export default useEvents;
