
const baseUrl = 'http://localhost:3000';
const httprequest = async (uri, req = {method = 'GET', body = null, header = {}} = {}) => {
  // Object.assign(req.header, {'auth-token': pstate.token});
  const res = await fetch(`${baseUrl}${uri}`, {
    method: req.method,
    headers: {...new Headers(), ...req.header},
    body: req.body,
  });
  if (res.status == 200) {
    const result = await res.json();
    return result;
  } else {
    return {
      status: false,
      code: res.status,
      message: res.statusText,
      data: null
    }
  }
};
