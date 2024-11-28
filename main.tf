terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "nextjs-hello-world-rg"
  location = "US West 2"
}

resource "azurerm_static_site" "web" {
  name                = "nextjs-hello-world"
  resource_group_name = azurerm_resource_group.rg.name
  location           = azurerm_resource_group.rg.location
}
