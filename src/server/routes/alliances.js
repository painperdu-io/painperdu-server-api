import Alliances from './../controllers/Alliances';

export default [
  // GET
  { method: 'GET', path: '/alliances', config: Alliances.getAll },
  { method: 'GET', path: '/alliances/{allianceId}', config: Alliances.getAllianceById },
  { method: 'GET', path: '/alliances/user/{userId}', config: Alliances.getAlliancesByUserId },
  { method: 'GET', path: '/alliances/{allianceId}/user/{userId}', config: Alliances.getAllianceByIdWithUserId },

  // POST
  { method: 'POST', path: '/alliances', config: Alliances.create },

  // PUT
  { method: 'PUT', path: '/alliances/{allianceId}', config: Alliances.updateAllianceById },
  { method: 'PUT', path: '/alliances/{allianceId}/read/applicant', config: Alliances.updateAllianceReadApplicantById },
  { method: 'PUT', path: '/alliances/{allianceId}/read/giver', config: Alliances.updateAllianceReadGiverById },

  // DELETE
  { method: 'DELETE', path: '/alliances', config: Alliances.removeAll },
  { method: 'DELETE', path: '/alliances/{allianceId}', config: Alliances.removeAllianceById },
];
