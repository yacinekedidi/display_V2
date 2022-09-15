import { StreamChat } from 'stream-chat';

const apiKey = process.env.REACT_APP_STREAM_AP_KEY;
export const client = StreamChat.getInstance(apiKey);
