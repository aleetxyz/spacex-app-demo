import { gql } from "@apollo/client";

const getPastLaunches = gql`
query LaunchesPast($limit: Int){
  launchesPast(limit: $limit) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
}`;

class PastLaunchesQueryError extends Error {
  constructor() {
    super("Error while fetching launches")
    this.name = PastLaunchesQueryError.name
  }
}

export { getPastLaunches, PastLaunchesQueryError };