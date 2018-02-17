# Exploring a honeypot contract

In [this /r/ethdev post](https://www.reddit.com/r/ethdev/comments/7x5rwr/tricked_by_a_honeypot_contract_or_beaten_by/), [/u/CurrencyTycoon](https://www.reddit.com/u/CurrencyTycoon) describes his attempt to exploit a contract with a reentrancy attack. Little did he know, the contract was a honeypot.

This repository attempts to demonstrate that honeypot using the forking feature of [ganache-cli](https://github.com/trufflesuite/ganache-cli). Ganache is a fast, lightweight development blockchain, and is part of the [Truffle toolsuite](http://truffleframework.com/). Disclosure: I maintain Ganache.


# Explanation

There are two ways the contracts can be run: locally, and forked.

When running locally, we exploit both the target to exploit and the exploit contract to our local blockchain created by Ganache. For the target to exploit, we use the contract code displayed on EtherScan.

When running in forked mode, we only deploy our exploit, and we use Ganache to fork mainnet. See `migrations/2_bank.js` and `migrations/3_exploit.js` to see how this is accomplished.

For details about the honeypot contract itself, see the [reddit post](https://www.reddit.com/r/ethdev/comments/7x5rwr/tricked_by_a_honeypot_contract_or_beaten_by/) which inspired this repo, and Alex Sherbuck's writeup on how the honeypot contract works in this [Medium blog post](https://medium.com/@alexsherbuck/dissecting-an-ethereum-honey-pot-7102d7def5e0).

# Usage

This is a node.js project. If you don't already have node.js installed, I highly recommend installing it with [NVM](https://github.com/creationix/nvm). See the README page there for instructions.

Make sure to install project dependencies by running `npm install` in the root directory of this repo.

To run in "local" mode (see explanation above), open two consoles. In one, run `npm run local_testnet`, and in the other run `npm run local_migrate && npm run local_test`.

Similarly, to run in "forked" mode, open two consoles. In one, run `npm run forked_testnet`, and in the other run `npm run forked_migrate && npm run local_test`.

To understand how it all works, see the exploit contract in `contracts/Exploit.sol`, and the test in `test/exploit.js`.

