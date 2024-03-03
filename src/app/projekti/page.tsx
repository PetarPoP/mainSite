import Link from "next/link";

export default async function Page() {
  const resp = await fetch("https://api.github.com/users/PetarPoP/repos", {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN='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'}`
    }
  });
  const projekti = (await resp.json()) as Repository[];

  return (
      <div className="flex items-center justify-center w-full">
        <div className="flex-wrap flex gap-3 flex-col p-4 max-w-[500px]">
          {projekti.map((projekt) => {
            return <Projekt projekat={projekt} key={projekt.id}/>;
          })}
        </div>
      </div>
  );
}

function Projekt({projekat}: Readonly<{ projekat: Repository }>) {
  return (
      <div className="flex-col flex gap-2 p-2 appear">
        <div className="flex w-full h-[10vh] text-white justify-center items-center">
          <Link href="/">
            <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                    hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                    active:transform active:border-b-0 active:translate-y-0 text-xl">
              Početna
            </button>
          </Link>
        </div>
          <button className="p-1 transition-all duration-100 ease-in-out rounded
                    hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                    active:transform active:border-b-0 active:translate-y-0 text-white">
            <Link href={projekat.html_url} target="_blank" rel="noopener noreferrer" className="text-xl flex justify-center items-center">
              {projekat.name}
          </Link>
          </button>
        <div className="bg-white rounded p-2 leading-8">
          <p className="black-font">{projekat.description}</p>
          <p className="black-font"><strong>Language:</strong> {projekat.language}</p>
          <p className="black-font"><strong>Last Updated:</strong> {new Date(projekat.updated_at).toLocaleDateString()}</p>
          <p className="black-font"><small>Link to the repository is on the name of the project.</small></p>
        </div>
      </div>
  );
}

type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
