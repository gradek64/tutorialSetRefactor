import backUpData from "./apiResponseBackUp.json";

/**
 * try {} catch {}
 * is an old school way to more modern
 *
 * fetch('')
 * .then()
 * .catch(error)
 *
 * or promises
 *
 * promiseRespsonse (it would come from new Promise(resolve,reject){})
 * .then()
 * .catch(error)
 * **/

export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/apis");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("api error", e);
    return backUpData;
  }
};
