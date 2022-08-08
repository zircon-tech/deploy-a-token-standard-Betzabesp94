## Unit 3: Ethereum | Deploy a Token Standard -English Version- 🚀

### ERC777 | fungible token

[ERC777](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol) is compatible with [ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/e7397844f8dd9b54fb4227b91b20f3bd2e82dab2/contracts/token/ERC20/ERC20.sol) tokens, which allows full integration with DeFi Solutions.  

### Differences ERC20 vs ERC777
- Default Operators. (Allowing other addresses to interact, ideally, other verified and trusted contracts)
- [Hooks](https://docs.openzeppelin.com/contracts/3.x/extending-contracts#using-hooks)  
- Send function with data. 
- Possibility to approve and transferFrom in the same transaction. 
- Always 18 Decimals 

ERC777 Constructor 
```solidity
constructor(
        string memory name_,
        string memory symbol_,
        address[] memory defaultOperators_
    ) {
        _name = name_;
        _symbol = symbol_;

        _defaultOperatorsArray = defaultOperators_;
        for (uint256 i = 0; i < defaultOperators_.length; i++) {
            _defaultOperators[defaultOperators_[i]] = true;
        }

        // register interfaces
        _ERC1820_REGISTRY.setInterfaceImplementer(address(this), keccak256("ERC777Token"), address(this));
        _ERC1820_REGISTRY.setInterfaceImplementer(address(this), keccak256("ERC20Token"), address(this));
    }

```


ERC20 Constructor 
```solidity
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

```

### More resources
- Medium Article [Deep Dive — OpenZeppelin’s ERC777 Implementation](https://medium.com/coinmonks/deep-dive-openzeppelins-erc777-implementation-9db978ce1bea)
- [How to build and use ERC-777 tokens](https://soliditydeveloper.com/erc-777)

#### Deploy
Took to long to verify... 
Contract deployed and verified at: [0x71e1e928eeDad5bd32C92ceF1FE3c3df24D7975e](https://kovan.etherscan.io/address/0x71e1e928eeDad5bd32C92ceF1FE3c3df24D7975e#code)




## Unidad 3: Ethereum | Desplegar un Token estandar -Versión en español- 🚀

### ERC777 | Token Fungible 

[ERC777](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol) es compatible con tokens [ERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/e7397844f8dd9b54fb4227b91b20f3bd2e82dab2/contracts/token/ERC20/ERC20.sol), lo que permite una integración total con soluciones DeFi.

### Diferencias ERC20 vs ERC777
- Operadores predeterminados. (Permitiendo que otras direcciones interactúen, idealmente, otros contratos verificados y de confianza)
- [Hooks](https://docs.openzeppelin.com/contracts/3.x/extending-contracts#using-hooks)  
- Funcion Send con Data. 
- Possibilidad para approve y transferFrom en la misma transaccion. 
- Siempre 18 Decimales 

ERC777 Constructor 
```solidity
constructor(
        string memory name_,
        string memory symbol_,
        address[] memory defaultOperators_
    ) {
        _name = name_;
        _symbol = symbol_;

        _defaultOperatorsArray = defaultOperators_;
        for (uint256 i = 0; i < defaultOperators_.length; i++) {
            _defaultOperators[defaultOperators_[i]] = true;
        }

        // register interfaces
        _ERC1820_REGISTRY.setInterfaceImplementer(address(this), keccak256("ERC777Token"), address(this));
        _ERC1820_REGISTRY.setInterfaceImplementer(address(this), keccak256("ERC20Token"), address(this));
    }

```


ERC20 Constructor 
```solidity
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

```
### Más recursos
- Articulo Medium  [Deep Dive — OpenZeppelin’s ERC777 Implementation](https://medium.com/coinmonks/deep-dive-openzeppelins-erc777-implementation-9db978ce1bea)
- [How to build and use ERC-777 tokens](https://soliditydeveloper.com/erc-777)

#### Despliegue

Desplegado y verificado: [0x71e1e928eeDad5bd32C92ceF1FE3c3df24D7975e](https://kovan.etherscan.io/address/0x71e1e928eeDad5bd32C92ceF1FE3c3df24D7975e#code)


