import alliances from './../controllers/alliances';

export default [
  // GET
  { method: 'GET', path: '/alliances', config: alliances.getAll },
  { method: 'GET', path: '/alliances/{allianceId}', config: alliances.getAllianceById },

  // POST
  { method: 'POST', path: '/alliances', config: alliances.create },

  // PUT
  { method: 'PUT', path: '/alliances/{allianceId}', config: alliances.updateAllianceById },

  // DELETE
  { method: 'DELETE', path: '/alliances', config: alliances.removeAll },
  { method: 'DELETE', path: '/alliances/{allianceId}', config: alliances.removeAllianceById },
];
