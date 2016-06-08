import Alliances from './../controllers/Alliances';

export default [
  // GET
  { method: 'GET', path: '/alliances', config: Alliances.getAll },
  { method: 'GET', path: '/alliances/{allianceId}', config: Alliances.getAllianceById },
  { method: 'GET', path: '/alliances/user/{userId}', config: Alliances.getAlliancesByUserId },

  // POST
  { method: 'POST', path: '/alliances', config: Alliances.create },

  // PUT
  { method: 'PUT', path: '/alliances/{allianceId}', config: Alliances.updateAllianceById },

  // DELETE
  { method: 'DELETE', path: '/alliances', config: Alliances.removeAll },
  { method: 'DELETE', path: '/alliances/{allianceId}', config: Alliances.removeAllianceById },
];
