// jscs:disable
// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../../src/0_banner_utils.js", ['banner_utils'], ['storage', 'utils']);
goog.addDependency("../../../../../test/web-config.js", ['config'], []);
goog.addDependency("../../../../../src/0_queue.js", ['task_queue'], []);
goog.addDependency("../../../../../src/0_session.js", ['session'], ['goog.json', 'utils']);
goog.addDependency("../../../../../src/0_storage.js", ['storage'], ['goog.json', 'utils']);
goog.addDependency("../../../../../src/0_utils.js", ['utils'], ['goog.json', 'config']);
goog.addDependency("../../../../../src/1_api.js", ['Server'], ['utils', 'goog.json', 'storage']);
goog.addDependency("../../../../../src/1_banner_css.js", ['banner_css'], ['banner_utils', 'utils']);
goog.addDependency("../../../../../src/1_banner_html.js", ['banner_html'], ['banner_utils', 'utils', 'session', 'storage']);
goog.addDependency("../../../../../src/1_resources.js", ['resources'], ['utils', 'config']);
goog.addDependency("../../../../../src/2_banner.js", ['banner'], ['banner_utils', 'banner_css', 'banner_html', 'utils']);
goog.addDependency("../../../../../src/3_branch.js", ['Branch'], ['utils', 'resources', 'Server', 'banner', 'task_queue', 'storage', 'session', 'config', 'goog.json']);
goog.addDependency("../../../../../src/4_initialization.js", ['branch_instance'], ['Branch', 'config']);
goog.addDependency("../../../../../src/extern.js", [], []);
goog.addDependency("../../../../../src/onpage.js", [], []);
goog.addDependency("../../../../../test/0_queue.js", [], ['task_queue']);
goog.addDependency("../../../../../test/0_storage.js", [], ['storage']);
goog.addDependency("../../../../../test/0_utils.js", [], ['utils']);
goog.addDependency("../../../../../test/1_api.js", [], ['utils', 'Server', 'resources', 'storage', 'config']);
goog.addDependency("../../../../../test/3_branch.js", [], ['utils', 'Branch', 'resources', 'config', 'storage', 'session', 'goog.json']);
goog.addDependency("../../../../../test/4_integration.js", [], ['config', 'goog.json']);
goog.addDependency("../../../../../test/saucelabs.js", [], []);
goog.addDependency("../../../../../test/test-utils.js", [], []);
goog.addDependency("../../../../../test/web-config.js", ['config'], []);
