module.exports =  function canonize(url) {
  const rexp = new RegExp('@?(https?:)?(\/\/)?(www.)?((vk|telegram|vkontakte|twitter|github|medium)?[^\/]*\/)?(@)?([a-zA-Z0-9.?_?]*)([\/a-zA-Z0-9]*)', 'i');
  const username = url.match(rexp);
  return username
}