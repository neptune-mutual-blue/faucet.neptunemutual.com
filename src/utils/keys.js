import { utils } from "@neptunemutual/sdk";

export const getMetadataKeys = () => {
  return [
    bondpool("BondPool"),
    claimprocessor("ClaimProcessor"),
    cover("Cover"),
    governance("Governance"),
    npm("NPMToken"),
    policy("PolicyContract"),
    protocol("Protocol"),
    reassurance("Reassurance"),
    stablecoin("Stablecoin"),
    staking("Staking"),
    stakingPools("StakingPools"),
  ];
};

export const governance = (property = "governance") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.GOVERNANCE,
    ],
    returns: "address",
    property,
  };
};

export const bondpool = (property = "bondpool") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.BOND_POOL,
    ],
    returns: "address",
    property,
  };
};

export const claimprocessor = (property = "claimprocessor") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.CLAIM_PROCESSOR,
    ],
    returns: "address",
    property,
  };
};

export const cover = (property = "cover") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.COVER,
    ],
    returns: "address",
    property,
  };
};

export const npm = (property = "NPMToken") => {
  return {
    key: [utils.keyUtil.PROTOCOL.CNS.NPM],
    returns: "address",
    property,
  };
};

export const policy = (property = "policy") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.COVER_POLICY,
    ],
    returns: "address",
    property,
  };
};

export const protocol = (property = "protocol") => {
  return {
    key: [utils.keyUtil.PROTOCOL.CNS.CORE],
    returns: "address",
    property,
  };
};

export const reassurance = (property = "reassurance") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.COVER_REASSURANCE,
    ],
    returns: "address",
    property,
  };
};

export const stablecoin = (property = "stablecoin") => {
  return {
    key: [utils.keyUtil.PROTOCOL.CNS.COVER_STABLECOIN],
    returns: "address",
    property,
  };
};

export const staking = (property = "staking") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.COVER_STAKE,
    ],
    returns: "address",
    property,
  };
};

export const stakingPools = (property = "stakingPools") => {
  return {
    key: [
      utils.keyUtil.PROTOCOL.NS.CONTRACTS,
      utils.keyUtil.PROTOCOL.CNS.STAKING_POOL,
    ],
    returns: "address",
    property,
  };
};
