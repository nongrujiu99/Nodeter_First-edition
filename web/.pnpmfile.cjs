module.exports = {
  hooks: {
    readPackage(packageJson) {
      if (packageJson.name === 'ajv' || packageJson.name === 'ajv-formats') {
        if (packageJson.dependencies && packageJson.dependencies['fast-uri']) {
          packageJson.dependencies['fast-uri'] = '^3.1.6'
        }
      }
      return packageJson
    }
  }
}
