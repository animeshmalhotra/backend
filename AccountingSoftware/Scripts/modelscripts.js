module.exports = {
  taxtypes: {
    fetchAll: 'SELECT * FROM TaxTypes WHERE TenantId = ?',
    fetchById: 'SELECT * FROM TaxTypes WHERE Id = ? and TenantId = ?',
    create:
      'insert into TaxTypes (Id, Name, Value, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?,?)',
    delete: 'DELETE FROM TaxTypes WHERE Id = ?  and TenantId = ?',
    update:
      'UPDATE TaxTypes SET Name = ?, Value = ? , Active = ?,  UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  uom: {
    fetchAll: 'SELECT * FROM UOM WHERE TenantId = ?',
    fetchById: 'SELECT * FROM UOM WHERE Id = ? and TenantId = ?',
    create:
      'insert into UOM (Id, UnitName, IsPrimary, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?,?)',
    delete: 'DELETE FROM UOM WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE UOM SET UnitName = ?, IsPrimary = ? , Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  categorydetail: {
    fetchAll: 'SELECT * FROM categorydetail WHERE TenantId = ?',
    fetchById: 'SELECT * FROM categorydetail WHERE Id = ? and TenantId = ?',
    create:
      'insert into categorydetail (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM categorydetail WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE categorydetail SET Name = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  transactiontypeconfig: {
    fetchAll: 'SELECT * FROM transactiontypeconfig WHERE TenantId = ?',
    fetchById:
      'SELECT * FROM transactiontypeconfig WHERE Id = ? and TenantId = ?',
    create:
      'insert into transactiontypeconfig (Id, StartCounterNo, Prefix, Format, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?,?,?)',
    delete: 'DELETE FROM transactiontypeconfig WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE transactiontypeconfig SET StartCounterNo = ?, Prefix = ?, Format = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  organizationdetail: {
    fetchAll: 'SELECT * FROM organizationdetail WHERE TenantId = ?',
    fetchById: 'SELECT * FROM organizationdetail WHERE Id = ? and TenantId = ?',
    create:
      'insert into organizationdetail (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM organizationdetail WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE organizationdetail SET Name = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  uomfactor: {
    fetchAll: `select 
        uomf.Id,
        uomf.PrimaryUOMId,
        uomp.UnitName as "PrimaryUnitName",
        uomp.Active as "PrimaryUnitNameActive",
        uomf.SecondaryUOMId,
        uoms.UnitName as "SecondayUnitName",
        uoms.Active as "SecondayUnitActive",
        uomf.Factor,
        uomf.TenantId,
        uomf.Active
        from uomfactor as uomf join UOM as uomp on uomf.PrimaryUOMId = uomp.Id 
        join UOM as uoms on uomf.SecondaryUOMId = uoms.Id WHERE uomf.TenantId = ?`,
    fetchById: `select 
        uomf.Id,
        uomf.PrimaryUOMId,
        uomp.UnitName as "PrimaryUnitName",
        uomp.Active as "PrimaryUnitNameActive",
        uomf.SecondaryUOMId,
        uoms.UnitName as "SecondayUnitName",
        uoms.Active as "SecondayUnitActive",
        uomf.Factor,
        uomf.TenantId,
        uomf.Active 
        from uomfactor as uomf join UOM as uomp on uomf.PrimaryUOMId = uomp.Id 
        join UOM as uoms on uomf.SecondaryUOMId = uoms.Id WHERE uomf.Id = ? and uomf.TenantId = ?`,
    create:
      'insert into uomfactor (Id, PrimaryUOMId, SecondaryUOMId, Factor, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?,?,?)',
    delete: 'DELETE FROM uomfactor WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE uomfactor SET PrimaryUOMId = ?, SecondaryUOMId = ?, Factor = ?, Active = ? , UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  transactiontypes: {
    fetchAll: `select 
        tt.Id,
        tt.Name,
        tt.Active,
        tt.TenantId,
        ttc.Id as "TTCId",
        ttc.StartCounterNo as "TTCStartCounterNo",
        ttc.Prefix as "TTCPrefix",
        ttc.Format as "TTCFormat",
        ttc.Active as "TTCActive",
        ttc.TenantId as "TTCTenantId"
        from transactiontype as tt join transactiontypeconfig as ttc on tt.TransactionTypeConfigId = ttc.Id WHERE tt.TenantId = ?`,
    fetchById: `select 
        tt.Id,
        tt.Name,
        tt.Active,
        tt.TenantId,
        ttc.Id as "TTCId",
        ttc.StartCounterNo as "TTCStartCounterNo",
        ttc.Prefix as "TTCPrefix",
        ttc.Format as "TTCFormat",
        ttc.Active as "TTCActive",
        ttc.TenantId as "TTCTenantId"
        from transactiontype as tt join transactiontypeconfig as ttc on tt.TransactionTypeConfigId = ttc.Id where tt.Id = ? and tt.TenantId = ?`,
    create:
      'insert into transactiontype (Id, Name, TransactionTypeConfigId, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?,?)',
    delete: 'DELETE FROM transactiontype WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE transactiontype SET Name = ?, TransactionTypeConfigId = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  accounttypebase: {
    fetchAll: 'SELECT * FROM accounttypebase WHERE TenantId = ?',
    fetchById: 'SELECT * FROM accounttypebase WHERE Id = ? and TenantId = ?',
    create:
      'insert into accounttypebase (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM accounttypebase WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE accounttypebase SET Name = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  transactiontypestatus: {
    fetchAll: 'SELECT * FROM transactiontypestatus WHERE TenantId = ?',
    fetchById:
      'SELECT * FROM transactiontypestatus WHERE Id = ? and TenantId = ?',
    create:
      'insert into transactiontypestatus (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM transactiontypestatus WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE transactiontypestatus SET Name = ?, Active = ? , UpdatedOn = ?, UpdatedBy = ? WHERE Id = ?',
  },
  contactaddresstype: {
    fetchAll: 'SELECT * FROM contactaddresstype WHERE TenantId = ?',
    fetchById: 'SELECT * FROM contactaddresstype WHERE Id = ? and TenantId = ?',
    create:
      'insert into contactaddresstype (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM contactaddresstype WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE contactaddresstype SET Name = ?, Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  taxgroup: {
    fetchAll: 'SELECT * FROM taxgroup WHERE TenantId = ?',
    fetchById: 'SELECT * FROM taxgroup WHERE Id = ? and TenantId = ?',
    create:
      'insert into taxgroup (Id, Name, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM taxgroup WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE taxgroup SET Name = ?, Active = ?,  UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  taxgrouptaxtypemapper: {
    fetchAll: `Select
        tgttm.Id as "TaxGroupTaxTypeMapperId",
        tgttm.Active as "TaxGroupTaxTypeMapperActive",
        tg.Id as "TaxGroupId",
        tg.Name as "TaxGroupName",
        tg.Active as "TaxGroupActive",
        tt.Id as "TaxTypeId",
        tt.Name as "TaxTypeName",
        tt.Value as "TaxTypeValue",
        tt.Active as "TaxTypeActive"
        FROM taxgrouptaxtypemapper as tgttm 
        JOIN taxgroup as tg ON tgttm.TaxGroupId = tg.Id
        JOIN TaxTypes as tt ON tgttm.TaxTypeId = tt.Id
        WHERE tgttm.TenantId = ?`,
    fetchById: `Select
        tgttm.Id as "TaxGroupTaxTypeMapperId",
        tgttm.Active as "TaxGroupTaxTypeMapperActive",
        tg.Id as "TaxGroupId",
        tg.Name as "TaxGroupName",
        tg.Active as "TaxGroupActive",
        tt.Id as "TaxTypeId",
        tt.Name as "TaxTypeName",
        tt.Value as "TaxTypeValue",
        tt.Active as "TaxTypeActive"
        FROM taxgrouptaxtypemapper as tgttm 
        JOIN taxgroup as tg ON tgttm.TaxGroupId = tg.Id
        JOIN TaxTypes as tt ON tgttm.TaxTypeId = tt.Id
        WHERE tgttm.TenantId = ? and tgttm.Id = ?`,
    create:
      'insert into taxgrouptaxtypemapper (Id, TaxGroupId, TaxTypeId, TenantId, Active, CreatedOn, CreatedBy) values (?,?,?,?,?,?,?)',
    delete: 'DELETE FROM taxgrouptaxtypemapper WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE taxgrouptaxtypemapper SET TaxGroupId = ?, TaxTypeId = ? , Active = ?, UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
    searchbyname: `Select
        tgttm.Id as "TaxGroupTaxTypeMapperId",
        tgttm.Active as "TaxGroupTaxTypeMapperActive",
        tg.Id as "TaxGroupId",
        tg.Name as "TaxGroupName",
        tg.Active as "TaxGroupActive",
        tt.Id as "TaxTypeId",
        tt.Name as "TaxTypeName",
        tt.Value as "TaxTypeValue",
        tt.Active as "TaxTypeActive"
        FROM taxgrouptaxtypemapper as tgttm 
        JOIN taxgroup as tg ON tgttm.TaxGroupId = tg.Id
        JOIN TaxTypes as tt ON tgttm.TaxTypeId = tt.Id
        WHERE tgttm.TenantId = ?
        AND tg.Name = ?`,
  },
  mapprovider: {
    fetchAll: 'SELECT * FROM mapprovider WHERE TenantId = ?',
    fetchById: 'SELECT * FROM mapprovider WHERE Id = ? and TenantId = ?',
    create:
      'insert into mapprovider (Id, ProviderName, Active, TenantId, CreatedOn, CreatedBy) values(?,?,?,?,?,?)',
    delete: 'DELETE FROM mapprovider WHERE Id = ? and TenantId = ?',
    update:
      'UPDATE mapprovider SET ProviderName = ?, Active = ?,  UpdatedOn = ?, UpdatedBy = ? WHERE Id = ? and TenantId = ?',
  },
  generalmodule: {
    fetchAll: '',
    fetchById: '',
    create: '',
    delete: '',
    update: '',
  },
}
