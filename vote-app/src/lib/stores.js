import { writable } from "svelte/store";

export const user = writable({
    name: '',
    team: '',
    scrummaster: false,
    vote: -1
});