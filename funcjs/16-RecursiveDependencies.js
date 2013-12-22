// Use a hashmap to retain uniqueness
function getDependencies(tree, dependencies) {
    dependencies = dependencies || {};
    
    var subdeps = tree['dependencies'];

    for (key in subdeps) {
        var dep = subdeps[key];
        dependencies[key + "@" + dep['version']] = 1;
        getDependencies(dep, dependencies);
    };
    
    return Object.keys(dependencies).sort();
}

module.exports = getDependencies;
