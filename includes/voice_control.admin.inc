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

/**
 * Implements hook_form().
 */
function voice_control_controls_form($form, &$form_state) {
  $form['controls'] = array(
    '#type' => 'fieldset',
    '#title' => t('Control list'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  return system_settings_form($form);
}
