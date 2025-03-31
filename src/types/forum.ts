export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: Date;
  replies: ForumReply[];
}

export interface ForumReply {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
}