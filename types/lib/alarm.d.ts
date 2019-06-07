export interface Alarm {
    /**
     * Name of this alarm. This is the name that was passed into the alarms.create() call that created this alarm.
     */
    name: string,

    /**
     * Time at which the alarm is scheduled to fire next, in milliseconds since the epoch.
     */
    scheduledTime: number,

    /**
     * If this is not null, then the alarm is periodic, and this represents its period in minutes.
     */
    periodInMinutes: number
}

export interface Alarms {

    /**
     * Cancels an alarm, given its name.
     * @param name The name of the alarm to clear. If you don't supply this, the empty string "" will be used.
     * @returns A Promise that will be fulfilled with a boolean. This will be true if the alarm was cleared, false otherwise.
     */
    clear(name?: string): Promise<boolean>;

    /**
     * Cancels all active alarms.
     * @returns A Promise that will be fulfilled with a boolean. This will be true if any alarms were cleared, false otherwise. Note that Chrome always passes true here.
     */
    clearAll(): Promise<boolean>;

}