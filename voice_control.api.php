<?php
/**
 * @file
 * Documentation for voice_control API.
 */

/**
 * Used to add new voice control commands.
 * This will load the provided javascript files on page load.
 * The array key needs to be both the command and the name of function
 * in the Drupal.voice_control namespace.
 *
 * See controls/api.js for an example.
 */
function hook_add_voice_control(&$controls) {
  $controls['test'] = drupal_get_path('module', 'my_module') .'/controls/test.js';
}
