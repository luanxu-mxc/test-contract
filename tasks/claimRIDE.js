task("claimRIDE")
    .addParam("sn", "S/N code")
    .setAction(async (args, hre) => {
        console.log(`Ride to Earn claimed to S/N ${args.sn} with 20 RIDE`)
    });