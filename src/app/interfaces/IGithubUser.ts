interface IGithubLanguages {
  name?: string;
  id?: string;
}

interface IGithubPinnedRepositories extends IGithubRepositories {
  super();
}

interface IGithubRepositories {
  id?: string;
  name?: string;
  primaryLanguage: {
    name?: string,
  };
  url?: string;
  languages: {
    nodes: IGithubLanguages[]
  };
  description?: string;
}

interface IGithubUser {
  pinnedRepositories?: {
    nodes?: IGithubPinnedRepositories[],
  };
  repositories?: {
    nodes?: IGithubRepositories[],
  };
}

export interface IGithubUserResponse {
  user: IGithubUser;
}
