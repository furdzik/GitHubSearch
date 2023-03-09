interface Owner {
  login: string;
  html_url: string;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  url: string;
  topics: string[];
  owner: string;
  ownerUrl: string;
  forks: number;
  stars: number;
}

export interface ResponseElement {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  owner: Owner;
  forks: number;
  stargazers_count: number;
}
