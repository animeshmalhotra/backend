const addressdetail = require('../models/addressdetail.model')
const helper = require('../utils/helper')
const moduleNames = require('../config/modulenames')
const decodeToken = require('../utils/extracttoken')
const queryParams = require('../utils/queyParams')

// exports.update = async (req, res) => {
//   var decodedToken = decodeToken.decodeToken(req)

//   let tenantId = decodedToken.tenantId
//   let username = decodedToken.username

//   // Validate request
//   if (!Object.keys(req.body).length) {
//     res.status(400).send({
//       message: 'Content can not be empty!',
//     })
//   } else {
//     let cdFindById = await contactdetail.findById(
//       req.params.id,
//       tenantId,
//       username,
//       moduleNames.contactdetail.application.update
//     )

//     if (cdFindById == '404') {
//       return res.status(404).send({
//         message: 'Record not found.',
//       })
//     }

//     let updatedcd = {
//       Id: cdFindById[0].Id,
//       FirstName: helper.isEmpty(req.body.FirstName)
//         ? cdFindById[0].FirstName
//         : req.body.FirstName,
//       LastName: helper.isEmpty(req.body.LastName)
//         ? cdFindById[0].LastName
//         : req.body.LastName,
//       MobileNo: helper.isEmpty(req.body.MobileNo)
//         ? cdFindById[0].MobileNo
//         : req.body.MobileNo,
//       AltMobileNo: helper.isEmpty(req.body.AltMobileNo)
//         ? cdFindById[0].AltMobileNo
//         : req.body.AltMobileNo,
//       Landline1: helper.isEmpty(req.body.Landline1)
//         ? cdFindById[0].Landline1
//         : req.body.Landline1,
//       Landline2: helper.isEmpty(req.body.Landline2)
//         ? cdFindById[0].Landline2
//         : req.body.Landline2,
//       Ext1: helper.isEmpty(req.body.Ext1) ? cdFindById[0].Ext1 : req.body.Ext1,
//       Ext2: helper.isEmpty(req.body.Ext2) ? cdFindById[0].Ext2 : req.body.Ext2,
//       ContactAddressTypeId: helper.isEmpty(req.body.ContactAddressTypeId)
//         ? cdFindById[0].ContactAddressTypeId
//         : req.body.ContactAddressTypeId,
//       Active: helper.isEmpty(req.body.Active)
//         ? cdFindById[0].Active
//         : req.body.Active,
//       TenantId: tenantId,
//       UpdatedOn: new Date(),
//       UpdatedBy: username,
//     }

//     await contactdetail
//       .update(updatedcd, username)
//       .then(() => {
//         return res.status(200).send()
//       })
//       .catch((err) => {
//         return res.status(500).send()
//       })
//   }
// }

// exports.delete = async (req, res) => {
//   var decodedToken = decodeToken.decodeToken(req)

//   let tenantId = decodedToken.tenantId
//   let username = decodedToken.username

//   let cdFindById = await contactdetail.findById(
//     req.params.id,
//     tenantId,
//     username,
//     moduleNames.contactdetail.application.delete
//   )

//   if (cdFindById == '404') {
//     return res.status(404).send({
//       message: 'Record not found.',
//     })
//   }

//   contactdetail
//     .delete(req.params.id, tenantId, username)
//     .then(() => {
//       res.status(204).send()
//     })
//     .catch((err) => {
//       res.sendStatus(500).send()
//     })
// }

// /// This API is used to search Tax Group Detail by Group name
// exports.search = (req, res) => {
//   var decodedToken = decodeToken.decodeToken(req)

//   let tenantId = decodedToken.tenantId
//   let username = decodedToken.username

//   var params = queryParams.getQueryParams(req.query)

//   var queryParamName = params['QueryParamName']
//   var queryParamValue = params['QueryParamValue']

//   if (helper.isEmpty(queryParamName) || helper.isEmpty(queryParamValue)) {
//     return res.status(400).send({
//       message: 'query param not supported!',
//     })
//   }

//   contactdetail
//     .searchByParam(tenantId, username, params)
//     .then((cdResp) => {
//       res.status(200).send(cdResp)
//     })
//     .catch((errCode) => {
//       if (errCode === 400) {
//         return res.status(400).send({
//           message: 'query param not supported!',
//         })
//       }
//       res.sendStatus(500).send()
//     })
// }

exports.fetchAll = (req, res) => {
  var decodedToken = decodeToken.decodeToken(req)

  let tenantId = decodedToken.tenantId
  let username = decodedToken.username

  var addressDetailResp = []

  addressdetail
    .getAll(tenantId, username)
    .then((adResp) => {
      adResp.map((addressDetailMapper) => {
        var addressDetailJSON = {}

        let addressdetail = {
          Id: addressDetailMapper.Id,
          AddressLine1: addressDetailMapper.AddressLine1,
          AddressLine2: addressDetailMapper.AddressLine2,
          City: addressDetailMapper.City,
          State: addressDetailMapper.State,
          Pincode: addressDetailMapper.Pincode,
          Landmark: addressDetailMapper.Landmark,
          TenantId: addressDetailMapper.TenantId,
          Active: addressDetailMapper.Active,
          CreatedOn: addressDetailMapper.CreatedOn,
          CreatedBy: addressDetailMapper.CreatedBy,
          UpdatedOn: addressDetailMapper.UpdatedOn,
          UpdatedBy: addressDetailMapper.UpdatedBy,
        }

        let contactaddresstype = {
          Id: addressDetailMapper.ContactAddressTypeId,
          ContactAddressName: addressDetailMapper.ContactAddressName,
          Active: addressDetailMapper.ContactAddressActive,
        }

        let mapproviderlocationdetail = {
          Id: addressDetailMapper.MapProviderLocationDetailId,
          MapProviderId: addressDetailMapper.MapProviderId,
          LocationDetailId: addressDetailMapper.LocationDetailId,
          Active: addressDetailMapper.MapProviderLocationDetailActive,

          MapProvider: {
            Id: addressDetailMapper.MapProviderId,
            MapProviderName: addressDetailMapper.MapProviderName,
            Active: addressDetailMapper.MapProviderActive,
          },

          LocationDetail: {
            Id: addressDetailMapper.LocationDetailId,
            Lat: addressDetailMapper.LocationDetailLat,
            Lng: addressDetailMapper.LocationDetailLng,
            CF1: addressDetailMapper.LocationDetailCF1,
            CF2: addressDetailMapper.LocationDetailCF2,
            CF3: addressDetailMapper.LocationDetailCF3,
            CF4: addressDetailMapper.LocationDetailCF4,
            Active: addressDetailMapper.LocationDetailActive,
          },
        }

        addressDetailJSON.addressdetail = addressdetail
        addressDetailJSON.contactaddresstype = contactaddresstype
        addressDetailJSON.mapproviderlocationdetail = mapproviderlocationdetail

        addressDetailResp.push(addressDetailJSON)
      })

      res.status(200).send(addressDetailResp)
      //   res.status(200).send(adResp)
    })
    .catch((err) => {
      res.sendStatus(500).send()
    })
}

// exports.fetchById = (req, res) => {
//   var decodedToken = decodeToken.decodeToken(req)

//   let tenantId = decodedToken.tenantId
//   let username = decodedToken.username

//   contactdetail
//     .findById(
//       req.params.id,
//       tenantId,
//       username,
//       moduleNames.contactdetail.application.fetchById
//     )
//     .then((cdResp) => {
//       if (cdResp === 404) {
//         return res.status(404).send({
//           message: 'Record not found.',
//         })
//       }
//       res.send(cdResp)
//     })
//     .catch((err) => {
//       res.sendStatus(500).send()
//     })
// }

// exports.create = (req, res) => {
//   var decodedToken = decodeToken.decodeToken(req)

//   let tenantId = decodedToken.tenantId
//   let username = decodedToken.username

//   // Validate request
//   if (!Object.keys(req.body).length) {
//     res.status(400).send({
//       message: 'Content can not be empty!',
//     })
//   } else {
//     // Create a record
//     let cd = {
//       FirstName: req.body.FirstName,
//       LastName: req.body.LastName,
//       MobileNo: req.body.MobileNo,
//       AltMobileNo: req.body.AltMobileNo,
//       Landline1: req.body.Landline1,
//       Landline2: req.body.Landline2,
//       Landline2: req.body.Landline2,
//       Ext1: req.body.Ext1,
//       Ext2: req.body.Ext2,
//       ContactAddressTypeId: req.body.ContactAddressTypeId,
//       Active: req.body.Active,
//       TenantId: tenantId,
//       CreatedOn: new Date(),
//       CreatedBy: username,
//     }

//     contactdetail
//       .create(cd, username)
//       .then((cdResp) => {
//         res.send(cdResp)
//       })
//       .catch((err) => {
//         switch (err) {
//           case 'ER_DUP_ENTRY': {
//             return res.sendStatus(409).send()
//           }
//         }
//         res.sendStatus(500).send()
//       })
//   }
// }
