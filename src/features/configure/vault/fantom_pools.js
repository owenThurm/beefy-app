export const fantomPools = [
  {
    id: 'spartacus-spa',
    logo: 'single-assets/SPA.png',
    name: 'SPA',
    token: 'SPA',
    tokenDescription: 'Spartacus',
    tokenAddress: '0x5602df4a94eb6c680190accfa2a475621e0ddbdc',
    tokenDecimals: 9,
    tokenDescriptionUrl: '#',
    earnedToken: 'minSPA',
    earnedTokenAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945', // TODO
    earnContractAddress: '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945', // TODO
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'tokens',
    oracleId: 'SPA',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Spartacus',
    assets: ['SPA'],
    risks: ['IL_NONE', 'MCAP_MEDIUM', 'NO_AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'Rebasing',
    withdrawalFee: '0.05%',
    buyTokenUrl:
      'https://spookyswap.finance/swap?inputCurrency=0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e&outputCurrency=0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc',
  },
];
