type LaunchDataType = {
  mission_name: string;
  launch_date_local: Date;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: Array<string>;
  };
  rocket: {
    rocket_name: string;
  };
};

type LaunchDataTypeInputs = {
  limit: number;
};

type LaunchDataTypeOutputs = {
  launchesPast: Array<LaunchDataType>;
};

type LaunchDTO = {
  mission: string;
  timestamp: Date;
  site: string;
  articleLink: string;
  imageLinks: Array<string>
  rocketName: string
}

function mapLaunchData(launchResult: LaunchDataType): LaunchDTO {
  return {
    mission: launchResult.mission_name,
    timestamp: launchResult.launch_date_local,
    site: launchResult.launch_site.site_name_long,
    articleLink: launchResult.links.article_link,
    imageLinks: launchResult.links.flickr_images,
    rocketName: launchResult.rocket.rocket_name
  }
}

export { 
  mapLaunchData, 
  LaunchDTO, 
  LaunchDataTypeInputs, 
  LaunchDataTypeOutputs 
}