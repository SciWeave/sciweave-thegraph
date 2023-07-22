import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  CreateDao,
  OwnershipTransferred,
  SetMasterBaseDao,
  SetMasterDaoLogic
} from "../generated/SciWeaver/SciWeaver"

export function createCreateDaoEvent(
  dao: Address,
  creator: Address
): CreateDao {
  let createDaoEvent = changetype<CreateDao>(newMockEvent())

  createDaoEvent.parameters = new Array()

  createDaoEvent.parameters.push(
    new ethereum.EventParam("dao", ethereum.Value.fromAddress(dao))
  )
  createDaoEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return createDaoEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetMasterBaseDaoEvent(
  masterBaseDao: Address
): SetMasterBaseDao {
  let setMasterBaseDaoEvent = changetype<SetMasterBaseDao>(newMockEvent())

  setMasterBaseDaoEvent.parameters = new Array()

  setMasterBaseDaoEvent.parameters.push(
    new ethereum.EventParam(
      "masterBaseDao",
      ethereum.Value.fromAddress(masterBaseDao)
    )
  )

  return setMasterBaseDaoEvent
}

export function createSetMasterDaoLogicEvent(
  masterDaoLogic: Address
): SetMasterDaoLogic {
  let setMasterDaoLogicEvent = changetype<SetMasterDaoLogic>(newMockEvent())

  setMasterDaoLogicEvent.parameters = new Array()

  setMasterDaoLogicEvent.parameters.push(
    new ethereum.EventParam(
      "masterDaoLogic",
      ethereum.Value.fromAddress(masterDaoLogic)
    )
  )

  return setMasterDaoLogicEvent
}
