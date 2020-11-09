
  async function getTokenId(addr) {
      const abi = [{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
      const erc721Enumerable = new web3.eth.Contract(abi, addr, {
          from: '0xe96D860C8BBB30F6831E6E65d327295B7A0C524f', // default from address
      });
      return new Promise(async (resolve, reject) => {
        await erc721Enumerable.methods.tokenByIndex(0).call()
        .then((id) => resolve(id))
        .catch((e) => resolve(null));
      });
  }

  async function getTokenOwner(addr, id) {
      const abi = [{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}];
      const erc721 = new web3.eth.Contract(abi, addr, {
          from: '0xe96D860C8BBB30F6831E6E65d327295B7A0C524f', // default from address
      });
      return new Promise(async (resolve, reject) => {
        await erc721.methods.ownerOf(id).call()
        .then((id) => resolve(id))
        .catch((e) => resolve(null));
      });
  }
