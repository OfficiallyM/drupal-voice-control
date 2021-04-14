<?php

/**
 * Implements hook_form().
 */
function voice_control_basic_form($form, &$form_state) {
  $form['voice_control_enabled'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable voice control'),
    '#default_value' => variable_get('voice_control_enabled', TRUE),
  );

  return system_settings_form($form);
}
