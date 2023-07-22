import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CreateDao } from "../generated/schema"
import { CreateDao as CreateDaoEvent } from "../generated/SciWeaver/SciWeaver"
import { handleCreateDao } from "../src/sci-weaver"
import { createCreateDaoEvent } from "./sci-weaver-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dao = Address.fromString("0x0000000000000000000000000000000000000001")
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCreateDaoEvent = createCreateDaoEvent(dao, creator)
    handleCreateDao(newCreateDaoEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreateDao created and stored", () => {
    assert.entityCount("CreateDao", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreateDao",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dao",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreateDao",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
