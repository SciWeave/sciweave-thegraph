import {
  CreateDao as CreateDaoEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetMasterBaseDao as SetMasterBaseDaoEvent,
  SetMasterDaoLogic as SetMasterDaoLogicEvent
} from "../generated/SciWeaver/SciWeaver"
import {
  CreateDao,
  OwnershipTransferred,
  SetMasterBaseDao,
  SetMasterDaoLogic
} from "../generated/schema"

export function handleCreateDao(event: CreateDaoEvent): void {
  let entity = new CreateDao(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dao = event.params.dao
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMasterBaseDao(event: SetMasterBaseDaoEvent): void {
  let entity = new SetMasterBaseDao(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.masterBaseDao = event.params.masterBaseDao

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMasterDaoLogic(event: SetMasterDaoLogicEvent): void {
  let entity = new SetMasterDaoLogic(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.masterDaoLogic = event.params.masterDaoLogic

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
