import React, { ReactNode } from "react";
import { Subject } from "rxjs";
import EventsContext from "./EventContext";

interface UI_Event {
  type: string;
  payload: { [key: string]: any };
  when: string | Date | number;
}

/**
 * Global Events stream
 */
const Events$ = new Subject<UI_Event>();

/**
 * Events Provider
 * @param param0
 */
function Events({ children }: { children: ReactNode }) {
  return (
    <EventsContext.Provider value={Events$}>{children}</EventsContext.Provider>
  );
}

export default Events;
