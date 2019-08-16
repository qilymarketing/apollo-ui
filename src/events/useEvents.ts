import { useContext } from "react";
import EventsContext from "./EventContext";

function useEvents() {
  return useContext(EventsContext);
}

export default useEvents;
