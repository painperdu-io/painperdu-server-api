import Alliances from './../controllers/Alliances';

export default [
  // GET
  { method: 'GET', path: '/alliances', config: Alliances.getAll },
  { method: 'GET', path: '/alliances/{allianceId}', config: Alliances.getAllianceById },
  { method: 'GET', path: '/alliances/user/{userId}', config: Alliances.getAlliancesByUserId },
  { method: 'GET', path: '/alliances/{allianceId}/user/{userId}', config: Alliances.getAllianceByIdWithUserId },
  //{ method: 'GET', path: '/alliances/user/{userId}/notifications', config: Alliances.getAlliancesNotificationsByUserId },

  // POST
  { method: 'POST', path: '/alliances', config: Alliances.create },

  // PUT
  { method: 'PUT', path: '/alliances/{allianceId}', config: Alliances.updateAllianceById },
  { method: 'PUT', path: '/alliances/{allianceId}/read/applicant', config: Alliances.updateAllianceReadApplicantById },
  { method: 'PUT', path: '/alliances/{allianceId}/read/giver', config: Alliances.updateAllianceReadGiverById },
  { method: 'PUT', path: '/alliances/{allianceId}/applicant/accepted', config: Alliances.updateAllianceApplicantAcceptedById },


  // DELETE
  { method: 'DELETE', path: '/alliances', config: Alliances.removeAll },
  { method: 'DELETE', path: '/alliances/{allianceId}', config: Alliances.removeAllianceById },
];
