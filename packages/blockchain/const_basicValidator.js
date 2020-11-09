    const basicValidator = new web3.eth.Contract(abi, {
        from: '0xe96D860C8BBB30F6831E6E65d327295B7A0C524f', // default from address
    });
    return new Promise(async (resolve, reject) => {
      await basicValidator.deploy({
          data: bytecode,
          arguments: [test, addr]
      }).estimateGas((err, gas) => {
        if (!err) {
          resolve(true);
        } else if (String(err).includes('gas required exceeds allowance or always failing transaction')) {
          resolve(false);
        } else {
          resolve(false);
        }
      }).catch((e) => resolve(false));
    });
  }
