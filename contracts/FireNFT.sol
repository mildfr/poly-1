// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FireNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private fireIDCounter;

    mapping(uint256 => string) private firePrompts;

    constructor() ERC721("FireNFT", "Fire") {}

    function setDescription(uint256 fireID, string memory prompt) external onlyOwner {
        firePrompts[fireID] = prompt;
    }

    function promptDescription(uint256 fireID) external view returns (string memory) {
        return firePrompts[fireID];
    }

    function mint(address to , string memory cid) external onlyOwner {
        uint256 fireID = fireIDCounter.current();
        _mint(to, fireID);
        firePrompts[fireID] = cid;
        fireIDCounter.increment();
    }
}