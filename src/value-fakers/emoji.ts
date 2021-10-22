import {CreateDatabaseParameters} from '@notionhq/client/build/src/api-endpoints';

export type IconValue = NonNullable<Required<CreateDatabaseParameters['icon']>>;

export type EmojiValue = Extract<IconValue, {type: 'emoji'}>;

export type EmojiFaker = () => EmojiValue;

export const emoji =
  (faker: Faker.FakerStatic): EmojiFaker =>
  () => ({
    type: 'emoji',
    emoji: faker.helpers.randomize(EMOJIS),
  });

export const EMOJIS: Array<EmojiValue['emoji']> = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '🤣',
  '😂',
  '🙂',
  '🙃',
  '😉',
  '😊',
  '😇',
  '🥰',
  '😍',
  '🤩',
  '😘',
  '😗',
  '☺️',
  '☺',
  '😚',
  '😙',
  '🥲',
  '😋',
  '😛',
  '😜',
  '🤪',
  '😝',
  '🤑',
  '🤗',
  '🤭',
  '🤫',
  '🤔',
  '🤐',
  '🤨',
  '😐',
  '😑',
  '😶',
  '😶‍🌫️',
  '😶‍🌫',
  '😏',
  '😒',
  '🙄',
  '😬',
  '😮‍💨',
  '🤥',
  '😌',
  '😔',
  '😪',
  '🤤',
  '😴',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '🥵',
  '🥶',
  '🥴',
  '😵',
  '😵‍💫',
  '🤯',
  '🤠',
  '🥳',
  '🥸',
  '😎',
  '🤓',
  '🧐',
  '😕',
  '😟',
  '🙁',
  '☹️',
  '☹',
  '😮',
  '😯',
  '😲',
  '😳',
  '🥺',
  '😦',
  '😧',
  '😨',
  '😰',
  '😥',
  '😢',
  '😭',
  '😱',
  '😖',
  '😣',
  '😞',
  '😓',
  '😩',
  '😫',
  '🥱',
  '😤',
  '😡',
  '😠',
  '🤬',
  '😈',
  '👿',
  '💀',
  '☠️',
  '☠',
  '💩',
  '🤡',
  '👹',
  '👺',
  '👻',
  '👽',
  '👾',
  '🤖',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🙈',
  '🙉',
  '🙊',
  '💋',
  '💌',
  '💘',
  '💝',
  '💖',
  '💗',
  '💓',
  '💞',
  '💕',
  '💟',
  '❣️',
  '❣',
  '💔',
  '❤️‍🔥',
  '❤‍🔥',
  '❤️‍🩹',
  '❤‍🩹',
  '❤️',
  '❤',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🤎',
  '🖤',
  '🤍',
  '💯',
  '💢',
  '💥',
  '💫',
  '💦',
  '💨',
  '🕳️',
  '🕳',
  '💣',
  '💬',
  '👁️‍🗨️',
  '🗨️',
  '🗨',
  '🗯️',
  '🗯',
  '💭',
  '💤',
  '👋🏻',
  '👋🏼',
  '👋🏽',
  '👋🏾',
  '👋🏿',
  '👋',
  '🤚🏻',
  '🤚🏼',
  '🤚🏽',
  '🤚🏾',
  '🤚🏿',
  '🤚',
  '🖐🏻',
  '🖐🏼',
  '🖐🏽',
  '🖐🏾',
  '🖐🏿',
  '🖐️',
  '🖐',
  '✋🏻',
  '✋🏼',
  '✋🏽',
  '✋🏾',
  '✋🏿',
  '✋',
  '🖖🏻',
  '🖖🏼',
  '🖖🏽',
  '🖖🏾',
  '🖖🏿',
  '🖖',
  '👌🏻',
  '👌🏼',
  '👌🏽',
  '👌🏾',
  '👌🏿',
  '👌',
  '🤌🏻',
  '🤌🏼',
  '🤌🏽',
  '🤌🏾',
  '🤌🏿',
  '🤌',
  '🤏🏻',
  '🤏🏼',
  '🤏🏽',
  '🤏🏾',
  '🤏🏿',
  '🤏',
  '✌🏻',
  '✌🏼',
  '✌🏽',
  '✌🏾',
  '✌🏿',
  '✌️',
  '✌',
  '🤞🏻',
  '🤞🏼',
  '🤞🏽',
  '🤞🏾',
  '🤞🏿',
  '🤞',
  '🤟🏻',
  '🤟🏼',
  '🤟🏽',
  '🤟🏾',
  '🤟🏿',
  '🤟',
  '🤘🏻',
  '🤘🏼',
  '🤘🏽',
  '🤘🏾',
  '🤘🏿',
  '🤘',
  '🤙🏻',
  '🤙🏼',
  '🤙🏽',
  '🤙🏾',
  '🤙🏿',
  '🤙',
  '👈🏻',
  '👈🏼',
  '👈🏽',
  '👈🏾',
  '👈🏿',
  '👈',
  '👉🏻',
  '👉🏼',
  '👉🏽',
  '👉🏾',
  '👉🏿',
  '👉',
  '👆🏻',
  '👆🏼',
  '👆🏽',
  '👆🏾',
  '👆🏿',
  '👆',
  '🖕🏻',
  '🖕🏼',
  '🖕🏽',
  '🖕🏾',
  '🖕🏿',
  '🖕',
  '👇🏻',
  '👇🏼',
  '👇🏽',
  '👇🏾',
  '👇🏿',
  '👇',
  '☝🏻',
  '☝🏼',
  '☝🏽',
  '☝🏾',
  '☝🏿',
  '☝️',
  '☝',
  '👍🏻',
  '👍🏼',
  '👍🏽',
  '👍🏾',
  '👍🏿',
  '👍',
  '👎🏻',
  '👎🏼',
  '👎🏽',
  '👎🏾',
  '👎🏿',
  '👎',
  '✊🏻',
  '✊🏼',
  '✊🏽',
  '✊🏾',
  '✊🏿',
  '✊',
  '👊🏻',
  '👊🏼',
  '👊🏽',
  '👊🏾',
  '👊🏿',
  '👊',
  '🤛🏻',
  '🤛🏼',
  '🤛🏽',
  '🤛🏾',
  '🤛🏿',
  '🤛',
  '🤜🏻',
  '🤜🏼',
  '🤜🏽',
  '🤜🏾',
  '🤜🏿',
  '🤜',
  '👏🏻',
  '👏🏼',
  '👏🏽',
  '👏🏾',
  '👏🏿',
  '👏',
  '🙌🏻',
  '🙌🏼',
  '🙌🏽',
  '🙌🏾',
  '🙌🏿',
  '🙌',
  '👐🏻',
  '👐🏼',
  '👐🏽',
  '👐🏾',
  '👐🏿',
  '👐',
  '🤲🏻',
  '🤲🏼',
  '🤲🏽',
  '🤲🏾',
  '🤲🏿',
  '🤲',
  '🤝',
  '🙏🏻',
  '🙏🏼',
  '🙏🏽',
  '🙏🏾',
  '🙏🏿',
  '🙏',
  '✍🏻',
  '✍🏼',
  '✍🏽',
  '✍🏾',
  '✍🏿',
  '✍️',
  '✍',
  '💅🏻',
  '💅🏼',
  '💅🏽',
  '💅🏾',
  '💅🏿',
  '💅',
  '🤳🏻',
  '🤳🏼',
  '🤳🏽',
  '🤳🏾',
  '🤳🏿',
  '🤳',
  '💪🏻',
  '💪🏼',
  '💪🏽',
  '💪🏾',
  '💪🏿',
  '💪',
  '🦾',
  '🦿',
  '🦵🏻',
  '🦵🏼',
  '🦵🏽',
  '🦵🏾',
  '🦵🏿',
  '🦵',
  '🦶🏻',
  '🦶🏼',
  '🦶🏽',
  '🦶🏾',
  '🦶🏿',
  '🦶',
  '👂🏻',
  '👂🏼',
  '👂🏽',
  '👂🏾',
  '👂🏿',
  '👂',
  '🦻🏻',
  '🦻🏼',
  '🦻🏽',
  '🦻🏾',
  '🦻🏿',
  '🦻',
  '👃🏻',
  '👃🏼',
  '👃🏽',
  '👃🏾',
  '👃🏿',
  '👃',
  '🧠',
  '🫀',
  '🫁',
  '🦷',
  '🦴',
  '👀',
  '👁️',
  '👁',
  '👅',
  '👄',
  '👶🏻',
  '👶🏼',
  '👶🏽',
  '👶🏾',
  '👶🏿',
  '👶',
  '🧒🏻',
  '🧒🏼',
  '🧒🏽',
  '🧒🏾',
  '🧒🏿',
  '🧒',
  '👦🏻',
  '👦🏼',
  '👦🏽',
  '👦🏾',
  '👦🏿',
  '👦',
  '👧🏻',
  '👧🏼',
  '👧🏽',
  '👧🏾',
  '👧🏿',
  '👧',
  '🧑🏻',
  '🧑🏼',
  '🧑🏽',
  '🧑🏾',
  '🧑🏿',
  '🧑',
  '👱🏻',
  '👱🏼',
  '👱🏽',
  '👱🏾',
  '👱🏿',
  '👱',
  '👨🏻',
  '👨🏼',
  '👨🏽',
  '👨🏾',
  '👨🏿',
  '👨',
  '🧔🏻',
  '🧔🏼',
  '🧔🏽',
  '🧔🏾',
  '🧔🏿',
  '🧔',
  '🧔🏻‍♂️',
  '🧔🏼‍♂️',
  '🧔🏽‍♂️',
  '🧔🏾‍♂️',
  '🧔🏿‍♂️',
  '🧔‍♂️',
  '🧔‍♂',
  '🧔🏻‍♀️',
  '🧔🏼‍♀️',
  '🧔🏽‍♀️',
  '🧔🏾‍♀️',
  '🧔🏿‍♀️',
  '🧔‍♀️',
  '🧔‍♀',
  '👨🏻‍🦰',
  '👨🏼‍🦰',
  '👨🏽‍🦰',
  '👨🏾‍🦰',
  '👨🏿‍🦰',
  '👨‍🦰',
  '👨🏻‍🦱',
  '👨🏼‍🦱',
  '👨🏽‍🦱',
  '👨🏾‍🦱',
  '👨🏿‍🦱',
  '👨‍🦱',
  '👨🏻‍🦳',
  '👨🏼‍🦳',
  '👨🏽‍🦳',
  '👨🏾‍🦳',
  '👨🏿‍🦳',
  '👨‍🦳',
  '👨🏻‍🦲',
  '👨🏼‍🦲',
  '👨🏽‍🦲',
  '👨🏾‍🦲',
  '👨🏿‍🦲',
  '👨‍🦲',
  '👩🏻',
  '👩🏼',
  '👩🏽',
  '👩🏾',
  '👩🏿',
  '👩',
  '👩🏻‍🦰',
  '👩🏼‍🦰',
  '👩🏽‍🦰',
  '👩🏾‍🦰',
  '👩🏿‍🦰',
  '👩‍🦰',
  '🧑🏻‍🦰',
  '🧑🏼‍🦰',
  '🧑🏽‍🦰',
  '🧑🏾‍🦰',
  '🧑🏿‍🦰',
  '🧑‍🦰',
  '👩🏻‍🦱',
  '👩🏼‍🦱',
  '👩🏽‍🦱',
  '👩🏾‍🦱',
  '👩🏿‍🦱',
  '👩‍🦱',
  '🧑🏻‍🦱',
  '🧑🏼‍🦱',
  '🧑🏽‍🦱',
  '🧑🏾‍🦱',
  '🧑🏿‍🦱',
  '🧑‍🦱',
  '👩🏻‍🦳',
  '👩🏼‍🦳',
  '👩🏽‍🦳',
  '👩🏾‍🦳',
  '👩🏿‍🦳',
  '👩‍🦳',
  '🧑🏻‍🦳',
  '🧑🏼‍🦳',
  '🧑🏽‍🦳',
  '🧑🏾‍🦳',
  '🧑🏿‍🦳',
  '🧑‍🦳',
  '👩🏻‍🦲',
  '👩🏼‍🦲',
  '👩🏽‍🦲',
  '👩🏾‍🦲',
  '👩🏿‍🦲',
  '👩‍🦲',
  '🧑🏻‍🦲',
  '🧑🏼‍🦲',
  '🧑🏽‍🦲',
  '🧑🏾‍🦲',
  '🧑🏿‍🦲',
  '🧑‍🦲',
  '👱🏻‍♀️',
  '👱🏼‍♀️',
  '👱🏽‍♀️',
  '👱🏾‍♀️',
  '👱🏿‍♀️',
  '👱‍♀️',
  '👱‍♀',
  '👱🏻‍♂️',
  '👱🏼‍♂️',
  '👱🏽‍♂️',
  '👱🏾‍♂️',
  '👱🏿‍♂️',
  '👱‍♂️',
  '👱‍♂',
  '🧓🏻',
  '🧓🏼',
  '🧓🏽',
  '🧓🏾',
  '🧓🏿',
  '🧓',
  '👴🏻',
  '👴🏼',
  '👴🏽',
  '👴🏾',
  '👴🏿',
  '👴',
  '👵🏻',
  '👵🏼',
  '👵🏽',
  '👵🏾',
  '👵🏿',
  '👵',
  '🙍🏻',
  '🙍🏼',
  '🙍🏽',
  '🙍🏾',
  '🙍🏿',
  '🙍',
  '🙍🏻‍♂️',
  '🙍🏼‍♂️',
  '🙍🏽‍♂️',
  '🙍🏾‍♂️',
  '🙍🏿‍♂️',
  '🙍‍♂️',
  '🙍‍♂',
  '🙍🏻‍♀️',
  '🙍🏼‍♀️',
  '🙍🏽‍♀️',
  '🙍🏾‍♀️',
  '🙍🏿‍♀️',
  '🙍‍♀️',
  '🙍‍♀',
  '🙎🏻',
  '🙎🏼',
  '🙎🏽',
  '🙎🏾',
  '🙎🏿',
  '🙎',
  '🙎🏻‍♂️',
  '🙎🏼‍♂️',
  '🙎🏽‍♂️',
  '🙎🏾‍♂️',
  '🙎🏿‍♂️',
  '🙎‍♂️',
  '🙎‍♂',
  '🙎🏻‍♀️',
  '🙎🏼‍♀️',
  '🙎🏽‍♀️',
  '🙎🏾‍♀️',
  '🙎🏿‍♀️',
  '🙎‍♀️',
  '🙎‍♀',
  '🙅🏻',
  '🙅🏼',
  '🙅🏽',
  '🙅🏾',
  '🙅🏿',
  '🙅',
  '🙅🏻‍♂️',
  '🙅🏼‍♂️',
  '🙅🏽‍♂️',
  '🙅🏾‍♂️',
  '🙅🏿‍♂️',
  '🙅‍♂️',
  '🙅‍♂',
  '🙅🏻‍♀️',
  '🙅🏼‍♀️',
  '🙅🏽‍♀️',
  '🙅🏾‍♀️',
  '🙅🏿‍♀️',
  '🙅‍♀️',
  '🙅‍♀',
  '🙆🏻',
  '🙆🏼',
  '🙆🏽',
  '🙆🏾',
  '🙆🏿',
  '🙆',
  '🙆🏻‍♂️',
  '🙆🏼‍♂️',
  '🙆🏽‍♂️',
  '🙆🏾‍♂️',
  '🙆🏿‍♂️',
  '🙆‍♂️',
  '🙆‍♂',
  '🙆🏻‍♀️',
  '🙆🏼‍♀️',
  '🙆🏽‍♀️',
  '🙆🏾‍♀️',
  '🙆🏿‍♀️',
  '🙆‍♀️',
  '🙆‍♀',
  '💁🏻',
  '💁🏼',
  '💁🏽',
  '💁🏾',
  '💁🏿',
  '💁',
  '💁🏻‍♂️',
  '💁🏼‍♂️',
  '💁🏽‍♂️',
  '💁🏾‍♂️',
  '💁🏿‍♂️',
  '💁‍♂️',
  '💁‍♂',
  '💁🏻‍♀️',
  '💁🏼‍♀️',
  '💁🏽‍♀️',
  '💁🏾‍♀️',
  '💁🏿‍♀️',
  '💁‍♀️',
  '💁‍♀',
  '🙋🏻',
  '🙋🏼',
  '🙋🏽',
  '🙋🏾',
  '🙋🏿',
  '🙋',
  '🙋🏻‍♂️',
  '🙋🏼‍♂️',
  '🙋🏽‍♂️',
  '🙋🏾‍♂️',
  '🙋🏿‍♂️',
  '🙋‍♂️',
  '🙋‍♂',
  '🙋🏻‍♀️',
  '🙋🏼‍♀️',
  '🙋🏽‍♀️',
  '🙋🏾‍♀️',
  '🙋🏿‍♀️',
  '🙋‍♀️',
  '🙋‍♀',
  '🧏🏻',
  '🧏🏼',
  '🧏🏽',
  '🧏🏾',
  '🧏🏿',
  '🧏',
  '🧏🏻‍♂️',
  '🧏🏼‍♂️',
  '🧏🏽‍♂️',
  '🧏🏾‍♂️',
  '🧏🏿‍♂️',
  '🧏‍♂️',
  '🧏‍♂',
  '🧏🏻‍♀️',
  '🧏🏼‍♀️',
  '🧏🏽‍♀️',
  '🧏🏾‍♀️',
  '🧏🏿‍♀️',
  '🧏‍♀️',
  '🧏‍♀',
  '🙇🏻',
  '🙇🏼',
  '🙇🏽',
  '🙇🏾',
  '🙇🏿',
  '🙇',
  '🙇🏻‍♂️',
  '🙇🏼‍♂️',
  '🙇🏽‍♂️',
  '🙇🏾‍♂️',
  '🙇🏿‍♂️',
  '🙇‍♂️',
  '🙇‍♂',
  '🙇🏻‍♀️',
  '🙇🏼‍♀️',
  '🙇🏽‍♀️',
  '🙇🏾‍♀️',
  '🙇🏿‍♀️',
  '🙇‍♀️',
  '🙇‍♀',
  '🤦🏻',
  '🤦🏼',
  '🤦🏽',
  '🤦🏾',
  '🤦🏿',
  '🤦',
  '🤦🏻‍♂️',
  '🤦🏼‍♂️',
  '🤦🏽‍♂️',
  '🤦🏾‍♂️',
  '🤦🏿‍♂️',
  '🤦‍♂️',
  '🤦‍♂',
  '🤦🏻‍♀️',
  '🤦🏼‍♀️',
  '🤦🏽‍♀️',
  '🤦🏾‍♀️',
  '🤦🏿‍♀️',
  '🤦‍♀️',
  '🤦‍♀',
  '🤷🏻',
  '🤷🏼',
  '🤷🏽',
  '🤷🏾',
  '🤷🏿',
  '🤷',
  '🤷🏻‍♂️',
  '🤷🏼‍♂️',
  '🤷🏽‍♂️',
  '🤷🏾‍♂️',
  '🤷🏿‍♂️',
  '🤷‍♂️',
  '🤷‍♂',
  '🤷🏻‍♀️',
  '🤷🏼‍♀️',
  '🤷🏽‍♀️',
  '🤷🏾‍♀️',
  '🤷🏿‍♀️',
  '🤷‍♀️',
  '🤷‍♀',
  '🧑🏻‍⚕️',
  '🧑🏼‍⚕️',
  '🧑🏽‍⚕️',
  '🧑🏾‍⚕️',
  '🧑🏿‍⚕️',
  '🧑‍⚕️',
  '🧑‍⚕',
  '👨🏻‍⚕️',
  '👨🏼‍⚕️',
  '👨🏽‍⚕️',
  '👨🏾‍⚕️',
  '👨🏿‍⚕️',
  '👨‍⚕️',
  '👨‍⚕',
  '👩🏻‍⚕️',
  '👩🏼‍⚕️',
  '👩🏽‍⚕️',
  '👩🏾‍⚕️',
  '👩🏿‍⚕️',
  '👩‍⚕️',
  '👩‍⚕',
  '🧑🏻‍🎓',
  '🧑🏼‍🎓',
  '🧑🏽‍🎓',
  '🧑🏾‍🎓',
  '🧑🏿‍🎓',
  '🧑‍🎓',
  '👨🏻‍🎓',
  '👨🏼‍🎓',
  '👨🏽‍🎓',
  '👨🏾‍🎓',
  '👨🏿‍🎓',
  '👨‍🎓',
  '👩🏻‍🎓',
  '👩🏼‍🎓',
  '👩🏽‍🎓',
  '👩🏾‍🎓',
  '👩🏿‍🎓',
  '👩‍🎓',
  '🧑🏻‍🏫',
  '🧑🏼‍🏫',
  '🧑🏽‍🏫',
  '🧑🏾‍🏫',
  '🧑🏿‍🏫',
  '🧑‍🏫',
  '👨🏻‍🏫',
  '👨🏼‍🏫',
  '👨🏽‍🏫',
  '👨🏾‍🏫',
  '👨🏿‍🏫',
  '👨‍🏫',
  '👩🏻‍🏫',
  '👩🏼‍🏫',
  '👩🏽‍🏫',
  '👩🏾‍🏫',
  '👩🏿‍🏫',
  '👩‍🏫',
  '🧑🏻‍⚖️',
  '🧑🏼‍⚖️',
  '🧑🏽‍⚖️',
  '🧑🏾‍⚖️',
  '🧑🏿‍⚖️',
  '🧑‍⚖️',
  '🧑‍⚖',
  '👨🏻‍⚖️',
  '👨🏼‍⚖️',
  '👨🏽‍⚖️',
  '👨🏾‍⚖️',
  '👨🏿‍⚖️',
  '👨‍⚖️',
  '👨‍⚖',
  '👩🏻‍⚖️',
  '👩🏼‍⚖️',
  '👩🏽‍⚖️',
  '👩🏾‍⚖️',
  '👩🏿‍⚖️',
  '👩‍⚖️',
  '👩‍⚖',
  '🧑🏻‍🌾',
  '🧑🏼‍🌾',
  '🧑🏽‍🌾',
  '🧑🏾‍🌾',
  '🧑🏿‍🌾',
  '🧑‍🌾',
  '👨🏻‍🌾',
  '👨🏼‍🌾',
  '👨🏽‍🌾',
  '👨🏾‍🌾',
  '👨🏿‍🌾',
  '👨‍🌾',
  '👩🏻‍🌾',
  '👩🏼‍🌾',
  '👩🏽‍🌾',
  '👩🏾‍🌾',
  '👩🏿‍🌾',
  '👩‍🌾',
  '🧑🏻‍🍳',
  '🧑🏼‍🍳',
  '🧑🏽‍🍳',
  '🧑🏾‍🍳',
  '🧑🏿‍🍳',
  '🧑‍🍳',
  '👨🏻‍🍳',
  '👨🏼‍🍳',
  '👨🏽‍🍳',
  '👨🏾‍🍳',
  '👨🏿‍🍳',
  '👨‍🍳',
  '👩🏻‍🍳',
  '👩🏼‍🍳',
  '👩🏽‍🍳',
  '👩🏾‍🍳',
  '👩🏿‍🍳',
  '👩‍🍳',
  '🧑🏻‍🔧',
  '🧑🏼‍🔧',
  '🧑🏽‍🔧',
  '🧑🏾‍🔧',
  '🧑🏿‍🔧',
  '🧑‍🔧',
  '👨🏻‍🔧',
  '👨🏼‍🔧',
  '👨🏽‍🔧',
  '👨🏾‍🔧',
  '👨🏿‍🔧',
  '👨‍🔧',
  '👩🏻‍🔧',
  '👩🏼‍🔧',
  '👩🏽‍🔧',
  '👩🏾‍🔧',
  '👩🏿‍🔧',
  '👩‍🔧',
  '🧑🏻‍🏭',
  '🧑🏼‍🏭',
  '🧑🏽‍🏭',
  '🧑🏾‍🏭',
  '🧑🏿‍🏭',
  '🧑‍🏭',
  '👨🏻‍🏭',
  '👨🏼‍🏭',
  '👨🏽‍🏭',
  '👨🏾‍🏭',
  '👨🏿‍🏭',
  '👨‍🏭',
  '👩🏻‍🏭',
  '👩🏼‍🏭',
  '👩🏽‍🏭',
  '👩🏾‍🏭',
  '👩🏿‍🏭',
  '👩‍🏭',
  '🧑🏻‍💼',
  '🧑🏼‍💼',
  '🧑🏽‍💼',
  '🧑🏾‍💼',
  '🧑🏿‍💼',
  '🧑‍💼',
  '👨🏻‍💼',
  '👨🏼‍💼',
  '👨🏽‍💼',
  '👨🏾‍💼',
  '👨🏿‍💼',
  '👨‍💼',
  '👩🏻‍💼',
  '👩🏼‍💼',
  '👩🏽‍💼',
  '👩🏾‍💼',
  '👩🏿‍💼',
  '👩‍💼',
  '🧑🏻‍🔬',
  '🧑🏼‍🔬',
  '🧑🏽‍🔬',
  '🧑🏾‍🔬',
  '🧑🏿‍🔬',
  '🧑‍🔬',
  '👨🏻‍🔬',
  '👨🏼‍🔬',
  '👨🏽‍🔬',
  '👨🏾‍🔬',
  '👨🏿‍🔬',
  '👨‍🔬',
  '👩🏻‍🔬',
  '👩🏼‍🔬',
  '👩🏽‍🔬',
  '👩🏾‍🔬',
  '👩🏿‍🔬',
  '👩‍🔬',
  '🧑🏻‍💻',
  '🧑🏼‍💻',
  '🧑🏽‍💻',
  '🧑🏾‍💻',
  '🧑🏿‍💻',
  '🧑‍💻',
  '👨🏻‍💻',
  '👨🏼‍💻',
  '👨🏽‍💻',
  '👨🏾‍💻',
  '👨🏿‍💻',
  '👨‍💻',
  '👩🏻‍💻',
  '👩🏼‍💻',
  '👩🏽‍💻',
  '👩🏾‍💻',
  '👩🏿‍💻',
  '👩‍💻',
  '🧑🏻‍🎤',
  '🧑🏼‍🎤',
  '🧑🏽‍🎤',
  '🧑🏾‍🎤',
  '🧑🏿‍🎤',
  '🧑‍🎤',
  '👨🏻‍🎤',
  '👨🏼‍🎤',
  '👨🏽‍🎤',
  '👨🏾‍🎤',
  '👨🏿‍🎤',
  '👨‍🎤',
  '👩🏻‍🎤',
  '👩🏼‍🎤',
  '👩🏽‍🎤',
  '👩🏾‍🎤',
  '👩🏿‍🎤',
  '👩‍🎤',
  '🧑🏻‍🎨',
  '🧑🏼‍🎨',
  '🧑🏽‍🎨',
  '🧑🏾‍🎨',
  '🧑🏿‍🎨',
  '🧑‍🎨',
  '👨🏻‍🎨',
  '👨🏼‍🎨',
  '👨🏽‍🎨',
  '👨🏾‍🎨',
  '👨🏿‍🎨',
  '👨‍🎨',
  '👩🏻‍🎨',
  '👩🏼‍🎨',
  '👩🏽‍🎨',
  '👩🏾‍🎨',
  '👩🏿‍🎨',
  '👩‍🎨',
  '🧑🏻‍✈️',
  '🧑🏼‍✈️',
  '🧑🏽‍✈️',
  '🧑🏾‍✈️',
  '🧑🏿‍✈️',
  '🧑‍✈️',
  '🧑‍✈',
  '👨🏻‍✈️',
  '👨🏼‍✈️',
  '👨🏽‍✈️',
  '👨🏾‍✈️',
  '👨🏿‍✈️',
  '👨‍✈️',
  '👨‍✈',
  '👩🏻‍✈️',
  '👩🏼‍✈️',
  '👩🏽‍✈️',
  '👩🏾‍✈️',
  '👩🏿‍✈️',
  '👩‍✈️',
  '👩‍✈',
  '🧑🏻‍🚀',
  '🧑🏼‍🚀',
  '🧑🏽‍🚀',
  '🧑🏾‍🚀',
  '🧑🏿‍🚀',
  '🧑‍🚀',
  '👨🏻‍🚀',
  '👨🏼‍🚀',
  '👨🏽‍🚀',
  '👨🏾‍🚀',
  '👨🏿‍🚀',
  '👨‍🚀',
  '👩🏻‍🚀',
  '👩🏼‍🚀',
  '👩🏽‍🚀',
  '👩🏾‍🚀',
  '👩🏿‍🚀',
  '👩‍🚀',
  '🧑🏻‍🚒',
  '🧑🏼‍🚒',
  '🧑🏽‍🚒',
  '🧑🏾‍🚒',
  '🧑🏿‍🚒',
  '🧑‍🚒',
  '👨🏻‍🚒',
  '👨🏼‍🚒',
  '👨🏽‍🚒',
  '👨🏾‍🚒',
  '👨🏿‍🚒',
  '👨‍🚒',
  '👩🏻‍🚒',
  '👩🏼‍🚒',
  '👩🏽‍🚒',
  '👩🏾‍🚒',
  '👩🏿‍🚒',
  '👩‍🚒',
  '👮🏻',
  '👮🏼',
  '👮🏽',
  '👮🏾',
  '👮🏿',
  '👮',
  '👮🏻‍♂️',
  '👮🏼‍♂️',
  '👮🏽‍♂️',
  '👮🏾‍♂️',
  '👮🏿‍♂️',
  '👮‍♂️',
  '👮‍♂',
  '👮🏻‍♀️',
  '👮🏼‍♀️',
  '👮🏽‍♀️',
  '👮🏾‍♀️',
  '👮🏿‍♀️',
  '👮‍♀️',
  '👮‍♀',
  '🕵🏻',
  '🕵🏼',
  '🕵🏽',
  '🕵🏾',
  '🕵🏿',
  '🕵️',
  '🕵',
  '🕵🏻‍♂️',
  '🕵🏼‍♂️',
  '🕵🏽‍♂️',
  '🕵🏾‍♂️',
  '🕵🏿‍♂️',
  '🕵️‍♂️',
  '🕵🏻‍♀️',
  '🕵🏼‍♀️',
  '🕵🏽‍♀️',
  '🕵🏾‍♀️',
  '🕵🏿‍♀️',
  '🕵️‍♀️',
  '💂🏻',
  '💂🏼',
  '💂🏽',
  '💂🏾',
  '💂🏿',
  '💂',
  '💂🏻‍♂️',
  '💂🏼‍♂️',
  '💂🏽‍♂️',
  '💂🏾‍♂️',
  '💂🏿‍♂️',
  '💂‍♂️',
  '💂‍♂',
  '💂🏻‍♀️',
  '💂🏼‍♀️',
  '💂🏽‍♀️',
  '💂🏾‍♀️',
  '💂🏿‍♀️',
  '💂‍♀️',
  '💂‍♀',
  '🥷🏻',
  '🥷🏼',
  '🥷🏽',
  '🥷🏾',
  '🥷🏿',
  '🥷',
  '👷🏻',
  '👷🏼',
  '👷🏽',
  '👷🏾',
  '👷🏿',
  '👷',
  '👷🏻‍♂️',
  '👷🏼‍♂️',
  '👷🏽‍♂️',
  '👷🏾‍♂️',
  '👷🏿‍♂️',
  '👷‍♂️',
  '👷‍♂',
  '👷🏻‍♀️',
  '👷🏼‍♀️',
  '👷🏽‍♀️',
  '👷🏾‍♀️',
  '👷🏿‍♀️',
  '👷‍♀️',
  '👷‍♀',
  '🤴🏻',
  '🤴🏼',
  '🤴🏽',
  '🤴🏾',
  '🤴🏿',
  '🤴',
  '👸🏻',
  '👸🏼',
  '👸🏽',
  '👸🏾',
  '👸🏿',
  '👸',
  '👳🏻',
  '👳🏼',
  '👳🏽',
  '👳🏾',
  '👳🏿',
  '👳',
  '👳🏻‍♂️',
  '👳🏼‍♂️',
  '👳🏽‍♂️',
  '👳🏾‍♂️',
  '👳🏿‍♂️',
  '👳‍♂️',
  '👳‍♂',
  '👳🏻‍♀️',
  '👳🏼‍♀️',
  '👳🏽‍♀️',
  '👳🏾‍♀️',
  '👳🏿‍♀️',
  '👳‍♀️',
  '👳‍♀',
  '👲🏻',
  '👲🏼',
  '👲🏽',
  '👲🏾',
  '👲🏿',
  '👲',
  '🧕🏻',
  '🧕🏼',
  '🧕🏽',
  '🧕🏾',
  '🧕🏿',
  '🧕',
  '🤵🏻',
  '🤵🏼',
  '🤵🏽',
  '🤵🏾',
  '🤵🏿',
  '🤵',
  '🤵🏻‍♂️',
  '🤵🏼‍♂️',
  '🤵🏽‍♂️',
  '🤵🏾‍♂️',
  '🤵🏿‍♂️',
  '🤵‍♂️',
  '🤵‍♂',
  '🤵🏻‍♀️',
  '🤵🏼‍♀️',
  '🤵🏽‍♀️',
  '🤵🏾‍♀️',
  '🤵🏿‍♀️',
  '🤵‍♀️',
  '🤵‍♀',
  '👰🏻',
  '👰🏼',
  '👰🏽',
  '👰🏾',
  '👰🏿',
  '👰',
  '👰🏻‍♂️',
  '👰🏼‍♂️',
  '👰🏽‍♂️',
  '👰🏾‍♂️',
  '👰🏿‍♂️',
  '👰‍♂️',
  '👰‍♂',
  '👰🏻‍♀️',
  '👰🏼‍♀️',
  '👰🏽‍♀️',
  '👰🏾‍♀️',
  '👰🏿‍♀️',
  '👰‍♀️',
  '👰‍♀',
  '🤰🏻',
  '🤰🏼',
  '🤰🏽',
  '🤰🏾',
  '🤰🏿',
  '🤰',
  '🤱🏻',
  '🤱🏼',
  '🤱🏽',
  '🤱🏾',
  '🤱🏿',
  '🤱',
  '👩🏻‍🍼',
  '👩🏼‍🍼',
  '👩🏽‍🍼',
  '👩🏾‍🍼',
  '👩🏿‍🍼',
  '👩‍🍼',
  '👨🏻‍🍼',
  '👨🏼‍🍼',
  '👨🏽‍🍼',
  '👨🏾‍🍼',
  '👨🏿‍🍼',
  '👨‍🍼',
  '🧑🏻‍🍼',
  '🧑🏼‍🍼',
  '🧑🏽‍🍼',
  '🧑🏾‍🍼',
  '🧑🏿‍🍼',
  '🧑‍🍼',
  '👼🏻',
  '👼🏼',
  '👼🏽',
  '👼🏾',
  '👼🏿',
  '👼',
  '🎅🏻',
  '🎅🏼',
  '🎅🏽',
  '🎅🏾',
  '🎅🏿',
  '🎅',
  '🤶🏻',
  '🤶🏼',
  '🤶🏽',
  '🤶🏾',
  '🤶🏿',
  '🤶',
  '🧑🏻‍🎄',
  '🧑🏼‍🎄',
  '🧑🏽‍🎄',
  '🧑🏾‍🎄',
  '🧑🏿‍🎄',
  '🧑‍🎄',
  '🦸🏻',
  '🦸🏼',
  '🦸🏽',
  '🦸🏾',
  '🦸🏿',
  '🦸',
  '🦸🏻‍♂️',
  '🦸🏼‍♂️',
  '🦸🏽‍♂️',
  '🦸🏾‍♂️',
  '🦸🏿‍♂️',
  '🦸‍♂️',
  '🦸‍♂',
  '🦸🏻‍♀️',
  '🦸🏼‍♀️',
  '🦸🏽‍♀️',
  '🦸🏾‍♀️',
  '🦸🏿‍♀️',
  '🦸‍♀️',
  '🦸‍♀',
  '🦹🏻',
  '🦹🏼',
  '🦹🏽',
  '🦹🏾',
  '🦹🏿',
  '🦹',
  '🦹🏻‍♂️',
  '🦹🏼‍♂️',
  '🦹🏽‍♂️',
  '🦹🏾‍♂️',
  '🦹🏿‍♂️',
  '🦹‍♂️',
  '🦹‍♂',
  '🦹🏻‍♀️',
  '🦹🏼‍♀️',
  '🦹🏽‍♀️',
  '🦹🏾‍♀️',
  '🦹🏿‍♀️',
  '🦹‍♀️',
  '🦹‍♀',
  '🧙🏻',
  '🧙🏼',
  '🧙🏽',
  '🧙🏾',
  '🧙🏿',
  '🧙',
  '🧙🏻‍♂️',
  '🧙🏼‍♂️',
  '🧙🏽‍♂️',
  '🧙🏾‍♂️',
  '🧙🏿‍♂️',
  '🧙‍♂️',
  '🧙‍♂',
  '🧙🏻‍♀️',
  '🧙🏼‍♀️',
  '🧙🏽‍♀️',
  '🧙🏾‍♀️',
  '🧙🏿‍♀️',
  '🧙‍♀️',
  '🧙‍♀',
  '🧚🏻',
  '🧚🏼',
  '🧚🏽',
  '🧚🏾',
  '🧚🏿',
  '🧚',
  '🧚🏻‍♂️',
  '🧚🏼‍♂️',
  '🧚🏽‍♂️',
  '🧚🏾‍♂️',
  '🧚🏿‍♂️',
  '🧚‍♂️',
  '🧚‍♂',
  '🧚🏻‍♀️',
  '🧚🏼‍♀️',
  '🧚🏽‍♀️',
  '🧚🏾‍♀️',
  '🧚🏿‍♀️',
  '🧚‍♀️',
  '🧚‍♀',
  '🧛🏻',
  '🧛🏼',
  '🧛🏽',
  '🧛🏾',
  '🧛🏿',
  '🧛',
  '🧛🏻‍♂️',
  '🧛🏼‍♂️',
  '🧛🏽‍♂️',
  '🧛🏾‍♂️',
  '🧛🏿‍♂️',
  '🧛‍♂️',
  '🧛‍♂',
  '🧛🏻‍♀️',
  '🧛🏼‍♀️',
  '🧛🏽‍♀️',
  '🧛🏾‍♀️',
  '🧛🏿‍♀️',
  '🧛‍♀️',
  '🧛‍♀',
  '🧜🏻',
  '🧜🏼',
  '🧜🏽',
  '🧜🏾',
  '🧜🏿',
  '🧜',
  '🧜🏻‍♂️',
  '🧜🏼‍♂️',
  '🧜🏽‍♂️',
  '🧜🏾‍♂️',
  '🧜🏿‍♂️',
  '🧜‍♂️',
  '🧜‍♂',
  '🧜🏻‍♀️',
  '🧜🏼‍♀️',
  '🧜🏽‍♀️',
  '🧜🏾‍♀️',
  '🧜🏿‍♀️',
  '🧜‍♀️',
  '🧜‍♀',
  '🧝🏻',
  '🧝🏼',
  '🧝🏽',
  '🧝🏾',
  '🧝🏿',
  '🧝',
  '🧝🏻‍♂️',
  '🧝🏼‍♂️',
  '🧝🏽‍♂️',
  '🧝🏾‍♂️',
  '🧝🏿‍♂️',
  '🧝‍♂️',
  '🧝‍♂',
  '🧝🏻‍♀️',
  '🧝🏼‍♀️',
  '🧝🏽‍♀️',
  '🧝🏾‍♀️',
  '🧝🏿‍♀️',
  '🧝‍♀️',
  '🧝‍♀',
  '🧞',
  '🧞‍♂️',
  '🧞‍♂',
  '🧞‍♀️',
  '🧞‍♀',
  '🧟',
  '🧟‍♂️',
  '🧟‍♂',
  '🧟‍♀️',
  '🧟‍♀',
  '💆🏻',
  '💆🏼',
  '💆🏽',
  '💆🏾',
  '💆🏿',
  '💆',
  '💆🏻‍♂️',
  '💆🏼‍♂️',
  '💆🏽‍♂️',
  '💆🏾‍♂️',
  '💆🏿‍♂️',
  '💆‍♂️',
  '💆‍♂',
  '💆🏻‍♀️',
  '💆🏼‍♀️',
  '💆🏽‍♀️',
  '💆🏾‍♀️',
  '💆🏿‍♀️',
  '💆‍♀️',
  '💆‍♀',
  '💇🏻',
  '💇🏼',
  '💇🏽',
  '💇🏾',
  '💇🏿',
  '💇',
  '💇🏻‍♂️',
  '💇🏼‍♂️',
  '💇🏽‍♂️',
  '💇🏾‍♂️',
  '💇🏿‍♂️',
  '💇‍♂️',
  '💇‍♂',
  '💇🏻‍♀️',
  '💇🏼‍♀️',
  '💇🏽‍♀️',
  '💇🏾‍♀️',
  '💇🏿‍♀️',
  '💇‍♀️',
  '💇‍♀',
  '🚶🏻',
  '🚶🏼',
  '🚶🏽',
  '🚶🏾',
  '🚶🏿',
  '🚶',
  '🚶🏻‍♂️',
  '🚶🏼‍♂️',
  '🚶🏽‍♂️',
  '🚶🏾‍♂️',
  '🚶🏿‍♂️',
  '🚶‍♂️',
  '🚶‍♂',
  '🚶🏻‍♀️',
  '🚶🏼‍♀️',
  '🚶🏽‍♀️',
  '🚶🏾‍♀️',
  '🚶🏿‍♀️',
  '🚶‍♀️',
  '🚶‍♀',
  '🧍🏻',
  '🧍🏼',
  '🧍🏽',
  '🧍🏾',
  '🧍🏿',
  '🧍',
  '🧍🏻‍♂️',
  '🧍🏼‍♂️',
  '🧍🏽‍♂️',
  '🧍🏾‍♂️',
  '🧍🏿‍♂️',
  '🧍‍♂️',
  '🧍‍♂',
  '🧍🏻‍♀️',
  '🧍🏼‍♀️',
  '🧍🏽‍♀️',
  '🧍🏾‍♀️',
  '🧍🏿‍♀️',
  '🧍‍♀️',
  '🧍‍♀',
  '🧎🏻',
  '🧎🏼',
  '🧎🏽',
  '🧎🏾',
  '🧎🏿',
  '🧎',
  '🧎🏻‍♂️',
  '🧎🏼‍♂️',
  '🧎🏽‍♂️',
  '🧎🏾‍♂️',
  '🧎🏿‍♂️',
  '🧎‍♂️',
  '🧎‍♂',
  '🧎🏻‍♀️',
  '🧎🏼‍♀️',
  '🧎🏽‍♀️',
  '🧎🏾‍♀️',
  '🧎🏿‍♀️',
  '🧎‍♀️',
  '🧎‍♀',
  '🧑🏻‍🦯',
  '🧑🏼‍🦯',
  '🧑🏽‍🦯',
  '🧑🏾‍🦯',
  '🧑🏿‍🦯',
  '🧑‍🦯',
  '👨🏻‍🦯',
  '👨🏼‍🦯',
  '👨🏽‍🦯',
  '👨🏾‍🦯',
  '👨🏿‍🦯',
  '👨‍🦯',
  '👩🏻‍🦯',
  '👩🏼‍🦯',
  '👩🏽‍🦯',
  '👩🏾‍🦯',
  '👩🏿‍🦯',
  '👩‍🦯',
  '🧑🏻‍🦼',
  '🧑🏼‍🦼',
  '🧑🏽‍🦼',
  '🧑🏾‍🦼',
  '🧑🏿‍🦼',
  '🧑‍🦼',
  '👨🏻‍🦼',
  '👨🏼‍🦼',
  '👨🏽‍🦼',
  '👨🏾‍🦼',
  '👨🏿‍🦼',
  '👨‍🦼',
  '👩🏻‍🦼',
  '👩🏼‍🦼',
  '👩🏽‍🦼',
  '👩🏾‍🦼',
  '👩🏿‍🦼',
  '👩‍🦼',
  '🧑🏻‍🦽',
  '🧑🏼‍🦽',
  '🧑🏽‍🦽',
  '🧑🏾‍🦽',
  '🧑🏿‍🦽',
  '🧑‍🦽',
  '👨🏻‍🦽',
  '👨🏼‍🦽',
  '👨🏽‍🦽',
  '👨🏾‍🦽',
  '👨🏿‍🦽',
  '👨‍🦽',
  '👩🏻‍🦽',
  '👩🏼‍🦽',
  '👩🏽‍🦽',
  '👩🏾‍🦽',
  '👩🏿‍🦽',
  '👩‍🦽',
  '🏃🏻',
  '🏃🏼',
  '🏃🏽',
  '🏃🏾',
  '🏃🏿',
  '🏃',
  '🏃🏻‍♂️',
  '🏃🏼‍♂️',
  '🏃🏽‍♂️',
  '🏃🏾‍♂️',
  '🏃🏿‍♂️',
  '🏃‍♂️',
  '🏃‍♂',
  '🏃🏻‍♀️',
  '🏃🏼‍♀️',
  '🏃🏽‍♀️',
  '🏃🏾‍♀️',
  '🏃🏿‍♀️',
  '🏃‍♀️',
  '🏃‍♀',
  '💃🏻',
  '💃🏼',
  '💃🏽',
  '💃🏾',
  '💃🏿',
  '💃',
  '🕺🏻',
  '🕺🏼',
  '🕺🏽',
  '🕺🏾',
  '🕺🏿',
  '🕺',
  '🕴🏻',
  '🕴🏼',
  '🕴🏽',
  '🕴🏾',
  '🕴🏿',
  '🕴️',
  '🕴',
  '👯',
  '👯‍♂️',
  '👯‍♂',
  '👯‍♀️',
  '👯‍♀',
  '🧖🏻',
  '🧖🏼',
  '🧖🏽',
  '🧖🏾',
  '🧖🏿',
  '🧖',
  '🧖🏻‍♂️',
  '🧖🏼‍♂️',
  '🧖🏽‍♂️',
  '🧖🏾‍♂️',
  '🧖🏿‍♂️',
  '🧖‍♂️',
  '🧖‍♂',
  '🧖🏻‍♀️',
  '🧖🏼‍♀️',
  '🧖🏽‍♀️',
  '🧖🏾‍♀️',
  '🧖🏿‍♀️',
  '🧖‍♀️',
  '🧖‍♀',
  '🧗🏻',
  '🧗🏼',
  '🧗🏽',
  '🧗🏾',
  '🧗🏿',
  '🧗',
  '🧗🏻‍♂️',
  '🧗🏼‍♂️',
  '🧗🏽‍♂️',
  '🧗🏾‍♂️',
  '🧗🏿‍♂️',
  '🧗‍♂️',
  '🧗‍♂',
  '🧗🏻‍♀️',
  '🧗🏼‍♀️',
  '🧗🏽‍♀️',
  '🧗🏾‍♀️',
  '🧗🏿‍♀️',
  '🧗‍♀️',
  '🧗‍♀',
  '🤺',
  '🏇🏻',
  '🏇🏼',
  '🏇🏽',
  '🏇🏾',
  '🏇🏿',
  '🏇',
  '⛷️',
  '⛷',
  '🏂🏻',
  '🏂🏼',
  '🏂🏽',
  '🏂🏾',
  '🏂🏿',
  '🏂',
  '🏌🏻',
  '🏌🏼',
  '🏌🏽',
  '🏌🏾',
  '🏌🏿',
  '🏌️',
  '🏌',
  '🏌🏻‍♂️',
  '🏌🏼‍♂️',
  '🏌🏽‍♂️',
  '🏌🏾‍♂️',
  '🏌🏿‍♂️',
  '🏌️‍♂️',
  '🏌🏻‍♀️',
  '🏌🏼‍♀️',
  '🏌🏽‍♀️',
  '🏌🏾‍♀️',
  '🏌🏿‍♀️',
  '🏌️‍♀️',
  '🏄🏻',
  '🏄🏼',
  '🏄🏽',
  '🏄🏾',
  '🏄🏿',
  '🏄',
  '🏄🏻‍♂️',
  '🏄🏼‍♂️',
  '🏄🏽‍♂️',
  '🏄🏾‍♂️',
  '🏄🏿‍♂️',
  '🏄‍♂️',
  '🏄‍♂',
  '🏄🏻‍♀️',
  '🏄🏼‍♀️',
  '🏄🏽‍♀️',
  '🏄🏾‍♀️',
  '🏄🏿‍♀️',
  '🏄‍♀️',
  '🏄‍♀',
  '🚣🏻',
  '🚣🏼',
  '🚣🏽',
  '🚣🏾',
  '🚣🏿',
  '🚣',
  '🚣🏻‍♂️',
  '🚣🏼‍♂️',
  '🚣🏽‍♂️',
  '🚣🏾‍♂️',
  '🚣🏿‍♂️',
  '🚣‍♂️',
  '🚣‍♂',
  '🚣🏻‍♀️',
  '🚣🏼‍♀️',
  '🚣🏽‍♀️',
  '🚣🏾‍♀️',
  '🚣🏿‍♀️',
  '🚣‍♀️',
  '🚣‍♀',
  '🏊🏻',
  '🏊🏼',
  '🏊🏽',
  '🏊🏾',
  '🏊🏿',
  '🏊',
  '🏊🏻‍♂️',
  '🏊🏼‍♂️',
  '🏊🏽‍♂️',
  '🏊🏾‍♂️',
  '🏊🏿‍♂️',
  '🏊‍♂️',
  '🏊‍♂',
  '🏊🏻‍♀️',
  '🏊🏼‍♀️',
  '🏊🏽‍♀️',
  '🏊🏾‍♀️',
  '🏊🏿‍♀️',
  '🏊‍♀️',
  '🏊‍♀',
  '⛹🏻',
  '⛹🏼',
  '⛹🏽',
  '⛹🏾',
  '⛹🏿',
  '⛹️',
  '⛹',
  '⛹🏻‍♂️',
  '⛹🏼‍♂️',
  '⛹🏽‍♂️',
  '⛹🏾‍♂️',
  '⛹🏿‍♂️',
  '⛹️‍♂️',
  '⛹🏻‍♀️',
  '⛹🏼‍♀️',
  '⛹🏽‍♀️',
  '⛹🏾‍♀️',
  '⛹🏿‍♀️',
  '⛹️‍♀️',
  '🏋🏻',
  '🏋🏼',
  '🏋🏽',
  '🏋🏾',
  '🏋🏿',
  '🏋️',
  '🏋',
  '🏋🏻‍♂️',
  '🏋🏼‍♂️',
  '🏋🏽‍♂️',
  '🏋🏾‍♂️',
  '🏋🏿‍♂️',
  '🏋️‍♂️',
  '🏋🏻‍♀️',
  '🏋🏼‍♀️',
  '🏋🏽‍♀️',
  '🏋🏾‍♀️',
  '🏋🏿‍♀️',
  '🏋️‍♀️',
  '🚴🏻',
  '🚴🏼',
  '🚴🏽',
  '🚴🏾',
  '🚴🏿',
  '🚴',
  '🚴🏻‍♂️',
  '🚴🏼‍♂️',
  '🚴🏽‍♂️',
  '🚴🏾‍♂️',
  '🚴🏿‍♂️',
  '🚴‍♂️',
  '🚴‍♂',
  '🚴🏻‍♀️',
  '🚴🏼‍♀️',
  '🚴🏽‍♀️',
  '🚴🏾‍♀️',
  '🚴🏿‍♀️',
  '🚴‍♀️',
  '🚴‍♀',
  '🚵🏻',
  '🚵🏼',
  '🚵🏽',
  '🚵🏾',
  '🚵🏿',
  '🚵',
  '🚵🏻‍♂️',
  '🚵🏼‍♂️',
  '🚵🏽‍♂️',
  '🚵🏾‍♂️',
  '🚵🏿‍♂️',
  '🚵‍♂️',
  '🚵‍♂',
  '🚵🏻‍♀️',
  '🚵🏼‍♀️',
  '🚵🏽‍♀️',
  '🚵🏾‍♀️',
  '🚵🏿‍♀️',
  '🚵‍♀️',
  '🚵‍♀',
  '🤸🏻',
  '🤸🏼',
  '🤸🏽',
  '🤸🏾',
  '🤸🏿',
  '🤸',
  '🤸🏻‍♂️',
  '🤸🏼‍♂️',
  '🤸🏽‍♂️',
  '🤸🏾‍♂️',
  '🤸🏿‍♂️',
  '🤸‍♂️',
  '🤸‍♂',
  '🤸🏻‍♀️',
  '🤸🏼‍♀️',
  '🤸🏽‍♀️',
  '🤸🏾‍♀️',
  '🤸🏿‍♀️',
  '🤸‍♀️',
  '🤸‍♀',
  '🤼',
  '🤼‍♂️',
  '🤼‍♂',
  '🤼‍♀️',
  '🤼‍♀',
  '🤽🏻',
  '🤽🏼',
  '🤽🏽',
  '🤽🏾',
  '🤽🏿',
  '🤽',
  '🤽🏻‍♂️',
  '🤽🏼‍♂️',
  '🤽🏽‍♂️',
  '🤽🏾‍♂️',
  '🤽🏿‍♂️',
  '🤽‍♂️',
  '🤽‍♂',
  '🤽🏻‍♀️',
  '🤽🏼‍♀️',
  '🤽🏽‍♀️',
  '🤽🏾‍♀️',
  '🤽🏿‍♀️',
  '🤽‍♀️',
  '🤽‍♀',
  '🤾🏻',
  '🤾🏼',
  '🤾🏽',
  '🤾🏾',
  '🤾🏿',
  '🤾',
  '🤾🏻‍♂️',
  '🤾🏼‍♂️',
  '🤾🏽‍♂️',
  '🤾🏾‍♂️',
  '🤾🏿‍♂️',
  '🤾‍♂️',
  '🤾‍♂',
  '🤾🏻‍♀️',
  '🤾🏼‍♀️',
  '🤾🏽‍♀️',
  '🤾🏾‍♀️',
  '🤾🏿‍♀️',
  '🤾‍♀️',
  '🤾‍♀',
  '🤹🏻',
  '🤹🏼',
  '🤹🏽',
  '🤹🏾',
  '🤹🏿',
  '🤹',
  '🤹🏻‍♂️',
  '🤹🏼‍♂️',
  '🤹🏽‍♂️',
  '🤹🏾‍♂️',
  '🤹🏿‍♂️',
  '🤹‍♂️',
  '🤹‍♂',
  '🤹🏻‍♀️',
  '🤹🏼‍♀️',
  '🤹🏽‍♀️',
  '🤹🏾‍♀️',
  '🤹🏿‍♀️',
  '🤹‍♀️',
  '🤹‍♀',
  '🧘🏻',
  '🧘🏼',
  '🧘🏽',
  '🧘🏾',
  '🧘🏿',
  '🧘',
  '🧘🏻‍♂️',
  '🧘🏼‍♂️',
  '🧘🏽‍♂️',
  '🧘🏾‍♂️',
  '🧘🏿‍♂️',
  '🧘‍♂️',
  '🧘‍♂',
  '🧘🏻‍♀️',
  '🧘🏼‍♀️',
  '🧘🏽‍♀️',
  '🧘🏾‍♀️',
  '🧘🏿‍♀️',
  '🧘‍♀️',
  '🧘‍♀',
  '🛀🏻',
  '🛀🏼',
  '🛀🏽',
  '🛀🏾',
  '🛀🏿',
  '🛀',
  '🛌🏻',
  '🛌🏼',
  '🛌🏽',
  '🛌🏾',
  '🛌🏿',
  '🛌',
  '🧑🏻‍🤝‍🧑🏻',
  '🧑🏻‍🤝‍🧑🏼',
  '🧑🏻‍🤝‍🧑🏽',
  '🧑🏻‍🤝‍🧑🏾',
  '🧑🏻‍🤝‍🧑🏿',
  '🧑🏼‍🤝‍🧑🏻',
  '🧑🏼‍🤝‍🧑🏼',
  '🧑🏼‍🤝‍🧑🏽',
  '🧑🏼‍🤝‍🧑🏾',
  '🧑🏼‍🤝‍🧑🏿',
  '🧑🏽‍🤝‍🧑🏻',
  '🧑🏽‍🤝‍🧑🏼',
  '🧑🏽‍🤝‍🧑🏽',
  '🧑🏽‍🤝‍🧑🏾',
  '🧑🏽‍🤝‍🧑🏿',
  '🧑🏾‍🤝‍🧑🏻',
  '🧑🏾‍🤝‍🧑🏼',
  '🧑🏾‍🤝‍🧑🏽',
  '🧑🏾‍🤝‍🧑🏾',
  '🧑🏾‍🤝‍🧑🏿',
  '🧑🏿‍🤝‍🧑🏻',
  '🧑🏿‍🤝‍🧑🏼',
  '🧑🏿‍🤝‍🧑🏽',
  '🧑🏿‍🤝‍🧑🏾',
  '🧑🏿‍🤝‍🧑🏿',
  '🧑‍🤝‍🧑',
  '👭',
  '👫',
  '👬',
  '💏',
  '💑',
  '👪',
  '👨‍👩‍👦',
  '👨‍👩‍👧',
  '👨‍👩‍👧‍👦',
  '👨‍👩‍👦‍👦',
  '👨‍👩‍👧‍👧',
  '👨‍👨‍👦',
  '👨‍👨‍👧',
  '👨‍👨‍👧‍👦',
  '👨‍👨‍👦‍👦',
  '👨‍👨‍👧‍👧',
  '👩‍👩‍👦',
  '👩‍👩‍👧',
  '👩‍👩‍👧‍👦',
  '👩‍👩‍👦‍👦',
  '👩‍👩‍👧‍👧',
  '👨‍👦',
  '👨‍👦‍👦',
  '👨‍👧',
  '👨‍👧‍👦',
  '👨‍👧‍👧',
  '👩‍👦',
  '👩‍👦‍👦',
  '👩‍👧',
  '👩‍👧‍👦',
  '👩‍👧‍👧',
  '🗣️',
  '🗣',
  '👤',
  '👥',
  '🫂',
  '👣',
  '🐵',
  '🐒',
  '🦍',
  '🦧',
  '🐶',
  '🐕',
  '🦮',
  '🐕‍🦺',
  '🐩',
  '🐺',
  '🦊',
  '🦝',
  '🐱',
  '🐈',
  '🐈‍⬛',
  '🦁',
  '🐯',
  '🐅',
  '🐆',
  '🐴',
  '🐎',
  '🦄',
  '🦓',
  '🦌',
  '🦬',
  '🐮',
  '🐂',
  '🐃',
  '🐄',
  '🐷',
  '🐖',
  '🐗',
  '🐽',
  '🐏',
  '🐑',
  '🐐',
  '🐪',
  '🐫',
  '🦙',
  '🦒',
  '🐘',
  '🦣',
  '🦏',
  '🦛',
  '🐭',
  '🐁',
  '🐀',
  '🐹',
  '🐰',
  '🐇',
  '🐿️',
  '🐿',
  '🦫',
  '🦔',
  '🦇',
  '🐻',
  '🐻‍❄️',
  '🐻‍❄',
  '🐨',
  '🐼',
  '🦥',
  '🦦',
  '🦨',
  '🦘',
  '🦡',
  '🐾',
  '🦃',
  '🐔',
  '🐓',
  '🐣',
  '🐤',
  '🐥',
  '🐦',
  '🐧',
  '🕊️',
  '🕊',
  '🦅',
  '🦆',
  '🦢',
  '🦉',
  '🦤',
  '🪶',
  '🦩',
  '🦚',
  '🦜',
  '🐸',
  '🐊',
  '🐢',
  '🦎',
  '🐍',
  '🐲',
  '🐉',
  '🦕',
  '🦖',
  '🐳',
  '🐋',
  '🐬',
  '🦭',
  '🐟',
  '🐠',
  '🐡',
  '🦈',
  '🐙',
  '🐚',
  '🐌',
  '🦋',
  '🐛',
  '🐜',
  '🐝',
  '🪲',
  '🐞',
  '🦗',
  '🪳',
  '🕷️',
  '🕷',
  '🕸️',
  '🕸',
  '🦂',
  '🦟',
  '🪰',
  '🪱',
  '🦠',
  '💐',
  '🌸',
  '💮',
  '🏵️',
  '🏵',
  '🌹',
  '🥀',
  '🌺',
  '🌻',
  '🌼',
  '🌷',
  '🌱',
  '🪴',
  '🌲',
  '🌳',
  '🌴',
  '🌵',
  '🌾',
  '🌿',
  '☘️',
  '☘',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🥭',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🫐',
  '🥝',
  '🍅',
  '🫒',
  '🥥',
  '🥑',
  '🍆',
  '🥔',
  '🥕',
  '🌽',
  '🌶️',
  '🌶',
  '🫑',
  '🥒',
  '🥬',
  '🥦',
  '🧄',
  '🧅',
  '🍄',
  '🥜',
  '🌰',
  '🍞',
  '🥐',
  '🥖',
  '🫓',
  '🥨',
  '🥯',
  '🥞',
  '🧇',
  '🧀',
  '🍖',
  '🍗',
  '🥩',
  '🥓',
  '🍔',
  '🍟',
  '🍕',
  '🌭',
  '🥪',
  '🌮',
  '🌯',
  '🫔',
  '🥙',
  '🧆',
  '🥚',
  '🍳',
  '🥘',
  '🍲',
  '🫕',
  '🥣',
  '🥗',
  '🍿',
  '🧈',
  '🧂',
  '🥫',
  '🍱',
  '🍘',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍠',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🥮',
  '🍡',
  '🥟',
  '🥠',
  '🥡',
  '🦀',
  '🦞',
  '🦐',
  '🦑',
  '🦪',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🎂',
  '🍰',
  '🧁',
  '🥧',
  '🍫',
  '🍬',
  '🍭',
  '🍮',
  '🍯',
  '🍼',
  '🥛',
  '☕',
  '🫖',
  '🍵',
  '🍶',
  '🍾',
  '🍷',
  '🍸',
  '🍹',
  '🍺',
  '🍻',
  '🥂',
  '🥃',
  '🥤',
  '🧋',
  '🧃',
  '🧉',
  '🧊',
  '🥢',
  '🍽️',
  '🍽',
  '🍴',
  '🥄',
  '🔪',
  '🏺',
  '🌍',
  '🌎',
  '🌏',
  '🌐',
  '🗺️',
  '🗺',
  '🗾',
  '🧭',
  '🏔️',
  '🏔',
  '⛰️',
  '⛰',
  '🌋',
  '🗻',
  '🏕️',
  '🏕',
  '🏖️',
  '🏖',
  '🏜️',
  '🏜',
  '🏝️',
  '🏝',
  '🏞️',
  '🏞',
  '🏟️',
  '🏟',
  '🏛️',
  '🏛',
  '🏗️',
  '🏗',
  '🧱',
  '🪨',
  '🪵',
  '🛖',
  '🏘️',
  '🏘',
  '🏚️',
  '🏚',
  '🏠',
  '🏡',
  '🏢',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏩',
  '🏪',
  '🏫',
  '🏬',
  '🏭',
  '🏯',
  '🏰',
  '💒',
  '🗼',
  '🗽',
  '⛪',
  '🕌',
  '🛕',
  '🕍',
  '⛩️',
  '⛩',
  '🕋',
  '⛲',
  '⛺',
  '🌁',
  '🌃',
  '🏙️',
  '🏙',
  '🌄',
  '🌅',
  '🌆',
  '🌇',
  '🌉',
  '♨️',
  '♨',
  '🎠',
  '🎡',
  '🎢',
  '💈',
  '🎪',
  '🚂',
  '🚃',
  '🚄',
  '🚅',
  '🚆',
  '🚇',
  '🚈',
  '🚉',
  '🚊',
  '🚝',
  '🚞',
  '🚋',
  '🚌',
  '🚍',
  '🚎',
  '🚐',
  '🚑',
  '🚒',
  '🚓',
  '🚔',
  '🚕',
  '🚖',
  '🚗',
  '🚘',
  '🚙',
  '🛻',
  '🚚',
  '🚛',
  '🚜',
  '🏎️',
  '🏎',
  '🏍️',
  '🏍',
  '🛵',
  '🦽',
  '🦼',
  '🛺',
  '🚲',
  '🛴',
  '🛹',
  '🛼',
  '🚏',
  '🛣️',
  '🛣',
  '🛤️',
  '🛤',
  '🛢️',
  '🛢',
  '⛽',
  '🚨',
  '🚥',
  '🚦',
  '🛑',
  '🚧',
  '⚓',
  '⛵',
  '🛶',
  '🚤',
  '🛳️',
  '🛳',
  '⛴️',
  '⛴',
  '🛥️',
  '🛥',
  '🚢',
  '✈️',
  '✈',
  '🛩️',
  '🛩',
  '🛫',
  '🛬',
  '🪂',
  '💺',
  '🚁',
  '🚟',
  '🚠',
  '🚡',
  '🛰️',
  '🛰',
  '🚀',
  '🛸',
  '🛎️',
  '🛎',
  '🧳',
  '⌛',
  '⏳',
  '⌚',
  '⏰',
  '⏱️',
  '⏱',
  '⏲️',
  '⏲',
  '🕰️',
  '🕰',
  '🕛',
  '🕧',
  '🕐',
  '🕜',
  '🕑',
  '🕝',
  '🕒',
  '🕞',
  '🕓',
  '🕟',
  '🕔',
  '🕠',
  '🕕',
  '🕡',
  '🕖',
  '🕢',
  '🕗',
  '🕣',
  '🕘',
  '🕤',
  '🕙',
  '🕥',
  '🕚',
  '🕦',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌙',
  '🌚',
  '🌛',
  '🌜',
  '🌡️',
  '🌡',
  '☀️',
  '☀',
  '🌝',
  '🌞',
  '🪐',
  '⭐',
  '🌟',
  '🌠',
  '🌌',
  '☁️',
  '☁',
  '⛅',
  '⛈️',
  '⛈',
  '🌤️',
  '🌤',
  '🌥️',
  '🌥',
  '🌦️',
  '🌦',
  '🌧️',
  '🌧',
  '🌨️',
  '🌨',
  '🌩️',
  '🌩',
  '🌪️',
  '🌪',
  '🌫️',
  '🌫',
  '🌬️',
  '🌬',
  '🌀',
  '🌈',
  '🌂',
  '☂️',
  '☂',
  '☔',
  '⛱️',
  '⛱',
  '⚡',
  '❄️',
  '❄',
  '☃️',
  '☃',
  '⛄',
  '☄️',
  '☄',
  '🔥',
  '💧',
  '🌊',
  '🎃',
  '🎄',
  '🎆',
  '🎇',
  '🧨',
  '✨',
  '🎈',
  '🎉',
  '🎊',
  '🎋',
  '🎍',
  '🎎',
  '🎏',
  '🎐',
  '🎑',
  '🧧',
  '🎀',
  '🎁',
  '🎗️',
  '🎗',
  '🎟️',
  '🎟',
  '🎫',
  '🎖️',
  '🎖',
  '🏆',
  '🏅',
  '🥇',
  '🥈',
  '🥉',
  '⚽',
  '⚾',
  '🥎',
  '🏀',
  '🏐',
  '🏈',
  '🏉',
  '🎾',
  '🥏',
  '🎳',
  '🏏',
  '🏑',
  '🏒',
  '🥍',
  '🏓',
  '🏸',
  '🥊',
  '🥋',
  '🥅',
  '⛳',
  '⛸️',
  '⛸',
  '🎣',
  '🤿',
  '🎽',
  '🎿',
  '🛷',
  '🥌',
  '🎯',
  '🪀',
  '🪁',
  '🎱',
  '🔮',
  '🪄',
  '🧿',
  '🎮',
  '🕹️',
  '🕹',
  '🎰',
  '🎲',
  '🧩',
  '🧸',
  '🪅',
  '🪆',
  '♠️',
  '♠',
  '♥️',
  '♥',
  '♦️',
  '♦',
  '♣️',
  '♣',
  '♟️',
  '♟',
  '🃏',
  '🀄',
  '🎴',
  '🎭',
  '🖼️',
  '🖼',
  '🎨',
  '🧵',
  '🪡',
  '🧶',
  '🪢',
  '👓',
  '🕶️',
  '🕶',
  '🥽',
  '🥼',
  '🦺',
  '👔',
  '👕',
  '👖',
  '🧣',
  '🧤',
  '🧥',
  '🧦',
  '👗',
  '👘',
  '🥻',
  '🩱',
  '🩲',
  '🩳',
  '👙',
  '👚',
  '👛',
  '👜',
  '👝',
  '🛍️',
  '🛍',
  '🎒',
  '🩴',
  '👞',
  '👟',
  '🥾',
  '🥿',
  '👠',
  '👡',
  '🩰',
  '👢',
  '👑',
  '👒',
  '🎩',
  '🎓',
  '🧢',
  '🪖',
  '⛑️',
  '⛑',
  '📿',
  '💄',
  '💍',
  '💎',
  '🔇',
  '🔈',
  '🔉',
  '🔊',
  '📢',
  '📣',
  '📯',
  '🔔',
  '🔕',
  '🎼',
  '🎵',
  '🎶',
  '🎙️',
  '🎙',
  '🎚️',
  '🎚',
  '🎛️',
  '🎛',
  '🎤',
  '🎧',
  '📻',
  '🎷',
  '🪗',
  '🎸',
  '🎹',
  '🎺',
  '🎻',
  '🪕',
  '🥁',
  '🪘',
  '📱',
  '📲',
  '☎️',
  '☎',
  '📞',
  '📟',
  '📠',
  '🔋',
  '🔌',
  '💻',
  '🖥️',
  '🖥',
  '🖨️',
  '🖨',
  '⌨️',
  '⌨',
  '🖱️',
  '🖱',
  '🖲️',
  '🖲',
  '💽',
  '💾',
  '💿',
  '📀',
  '🧮',
  '🎥',
  '🎞️',
  '🎞',
  '📽️',
  '📽',
  '🎬',
  '📺',
  '📷',
  '📸',
  '📹',
  '📼',
  '🔍',
  '🔎',
  '🕯️',
  '🕯',
  '💡',
  '🔦',
  '🏮',
  '🪔',
  '📔',
  '📕',
  '📖',
  '📗',
  '📘',
  '📙',
  '📚',
  '📓',
  '📒',
  '📃',
  '📜',
  '📄',
  '📰',
  '🗞️',
  '🗞',
  '📑',
  '🔖',
  '🏷️',
  '🏷',
  '💰',
  '🪙',
  '💴',
  '💵',
  '💶',
  '💷',
  '💸',
  '💳',
  '🧾',
  '💹',
  '✉️',
  '✉',
  '📧',
  '📨',
  '📩',
  '📤',
  '📥',
  '📦',
  '📫',
  '📪',
  '📬',
  '📭',
  '📮',
  '🗳️',
  '🗳',
  '✏️',
  '✏',
  '✒️',
  '✒',
  '🖋️',
  '🖋',
  '🖊️',
  '🖊',
  '🖌️',
  '🖌',
  '🖍️',
  '🖍',
  '📝',
  '💼',
  '📁',
  '📂',
  '🗂️',
  '🗂',
  '📅',
  '📆',
  '🗒️',
  '🗒',
  '🗓️',
  '🗓',
  '📇',
  '📈',
  '📉',
  '📊',
  '📋',
  '📌',
  '📍',
  '📎',
  '🖇️',
  '🖇',
  '📏',
  '📐',
  '✂️',
  '✂',
  '🗃️',
  '🗃',
  '🗄️',
  '🗄',
  '🗑️',
  '🗑',
  '🔒',
  '🔓',
  '🔏',
  '🔐',
  '🔑',
  '🗝️',
  '🗝',
  '🔨',
  '🪓',
  '⛏️',
  '⛏',
  '⚒️',
  '⚒',
  '🛠️',
  '🛠',
  '🗡️',
  '🗡',
  '⚔️',
  '⚔',
  '🔫',
  '🪃',
  '🏹',
  '🛡️',
  '🛡',
  '🪚',
  '🔧',
  '🪛',
  '🔩',
  '⚙️',
  '⚙',
  '🗜️',
  '🗜',
  '⚖️',
  '⚖',
  '🦯',
  '🔗',
  '⛓️',
  '⛓',
  '🪝',
  '🧰',
  '🧲',
  '🪜',
  '⚗️',
  '⚗',
  '🧪',
  '🧫',
  '🧬',
  '🔬',
  '🔭',
  '📡',
  '💉',
  '🩸',
  '💊',
  '🩹',
  '🩺',
  '🚪',
  '🛗',
  '🪞',
  '🪟',
  '🛏️',
  '🛏',
  '🛋️',
  '🛋',
  '🪑',
  '🚽',
  '🪠',
  '🚿',
  '🛁',
  '🪤',
  '🪒',
  '🧴',
  '🧷',
  '🧹',
  '🧺',
  '🧻',
  '🪣',
  '🧼',
  '🪥',
  '🧽',
  '🧯',
  '🛒',
  '🚬',
  '⚰️',
  '⚰',
  '🪦',
  '⚱️',
  '⚱',
  '🗿',
  '🪧',
  '🏧',
  '🚮',
  '🚰',
  '♿',
  '🚹',
  '🚺',
  '🚻',
  '🚼',
  '🚾',
  '🛂',
  '🛃',
  '🛄',
  '🛅',
  '⚠️',
  '⚠',
  '🚸',
  '⛔',
  '🚫',
  '🚳',
  '🚭',
  '🚯',
  '🚱',
  '🚷',
  '📵',
  '🔞',
  '☢️',
  '☢',
  '☣️',
  '☣',
  '⬆️',
  '⬆',
  '↗️',
  '↗',
  '➡️',
  '➡',
  '↘️',
  '↘',
  '⬇️',
  '⬇',
  '↙️',
  '↙',
  '⬅️',
  '⬅',
  '↖️',
  '↖',
  '↕️',
  '↕',
  '↔️',
  '↔',
  '↩️',
  '↩',
  '↪️',
  '↪',
  '⤴️',
  '⤴',
  '⤵️',
  '⤵',
  '🔃',
  '🔄',
  '🔙',
  '🔚',
  '🔛',
  '🔜',
  '🔝',
  '🛐',
  '⚛️',
  '⚛',
  '🕉️',
  '🕉',
  '✡️',
  '✡',
  '☸️',
  '☸',
  '☯️',
  '☯',
  '✝️',
  '✝',
  '☦️',
  '☦',
  '☪️',
  '☪',
  '☮️',
  '☮',
  '🕎',
  '🔯',
  '♈',
  '♉',
  '♊',
  '♋',
  '♌',
  '♍',
  '♎',
  '♏',
  '♐',
  '♑',
  '♒',
  '♓',
  '⛎',
  '🔀',
  '🔁',
  '🔂',
  '▶️',
  '▶',
  '⏩',
  '⏭️',
  '⏭',
  '⏯️',
  '⏯',
  '◀️',
  '◀',
  '⏪',
  '⏮️',
  '⏮',
  '🔼',
  '⏫',
  '🔽',
  '⏬',
  '⏸️',
  '⏸',
  '⏹️',
  '⏹',
  '⏺️',
  '⏺',
  '⏏️',
  '⏏',
  '🎦',
  '🔅',
  '🔆',
  '📶',
  '📳',
  '📴',
  '♀️',
  '♀',
  '♂️',
  '♂',
  '⚧️',
  '⚧',
  '✖️',
  '✖',
  '➕',
  '➖',
  '➗',
  '♾️',
  '♾',
  '‼️',
  '‼',
  '⁉️',
  '⁉',
  '❓',
  '❔',
  '❕',
  '❗',
  '〰️',
  '〰',
  '💱',
  '💲',
  '⚕️',
  '⚕',
  '♻️',
  '♻',
  '⚜️',
  '⚜',
  '🔱',
  '📛',
  '🔰',
  '⭕',
  '✅',
  '☑️',
  '☑',
  '✔️',
  '✔',
  '❌',
  '❎',
  '➰',
  '➿',
  '〽️',
  '〽',
  '✳️',
  '✳',
  '✴️',
  '✴',
  '❇️',
  '❇',
  '©️',
  '©',
  '®️',
  '®',
  '™️',
  '™',
  '#️⃣',
  '#⃣',
  '*️⃣',
  '*⃣',
  '0️⃣',
  '0⃣',
  '1️⃣',
  '1⃣',
  '2️⃣',
  '2⃣',
  '3️⃣',
  '3⃣',
  '4️⃣',
  '4⃣',
  '5️⃣',
  '5⃣',
  '6️⃣',
  '6⃣',
  '7️⃣',
  '7⃣',
  '8️⃣',
  '8⃣',
  '9️⃣',
  '9⃣',
  '🔟',
  '🔠',
  '🔡',
  '🔢',
  '🔣',
  '🔤',
  '🅰️',
  '🅰',
  '🆎',
  '🅱️',
  '🅱',
  '🆑',
  '🆒',
  '🆓',
  'ℹ️',
  'ℹ',
  '🆔',
  'Ⓜ️',
  'Ⓜ',
  '🆕',
  '🆖',
  '🅾️',
  '🅾',
  '🆗',
  '🅿️',
  '🅿',
  '🆘',
  '🆙',
  '🆚',
  '🈁',
  '🈂️',
  '🈂',
  '🈷️',
  '🈷',
  '🈶',
  '🈯',
  '🉐',
  '🈹',
  '🈚',
  '🈲',
  '🉑',
  '🈸',
  '🈴',
  '🈳',
  '㊗️',
  '㊗',
  '㊙️',
  '㊙',
  '🈺',
  '🈵',
  '🔴',
  '🟠',
  '🟡',
  '🟢',
  '🔵',
  '🟣',
  '🟤',
  '⚫',
  '⚪',
  '🟥',
  '🟧',
  '🟨',
  '🟩',
  '🟦',
  '🟪',
  '🟫',
  '⬛',
  '⬜',
  '◼️',
  '◼',
  '◻️',
  '◻',
  '◾',
  '◽',
  '▪️',
  '▪',
  '▫️',
  '▫',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
  '🔺',
  '🔻',
  '💠',
  '🔘',
  '🔳',
  '🔲',
  '🏁',
  '🚩',
  '🎌',
  '🏴',
  '🏳️',
  '🏳',
  '🏳️‍🌈',
  '🏳‍🌈',
  '🏳️‍⚧️',
  '🏴‍☠️',
  '🏴‍☠',
  '🇦🇨',
  '🇦🇩',
  '🇦🇪',
  '🇦🇫',
  '🇦🇬',
  '🇦🇮',
  '🇦🇱',
  '🇦🇲',
  '🇦🇴',
  '🇦🇶',
  '🇦🇷',
  '🇦🇸',
  '🇦🇹',
  '🇦🇺',
  '🇦🇼',
  '🇦🇽',
  '🇦🇿',
  '🇧🇦',
  '🇧🇧',
  '🇧🇩',
  '🇧🇪',
  '🇧🇫',
  '🇧🇬',
  '🇧🇭',
  '🇧🇮',
  '🇧🇯',
  '🇧🇱',
  '🇧🇲',
  '🇧🇳',
  '🇧🇴',
  '🇧🇶',
  '🇧🇷',
  '🇧🇸',
  '🇧🇹',
  '🇧🇻',
  '🇧🇼',
  '🇧🇾',
  '🇧🇿',
  '🇨🇦',
  '🇨🇨',
  '🇨🇩',
  '🇨🇫',
  '🇨🇬',
  '🇨🇭',
  '🇨🇮',
  '🇨🇰',
  '🇨🇱',
  '🇨🇲',
  '🇨🇳',
  '🇨🇴',
  '🇨🇵',
  '🇨🇷',
  '🇨🇺',
  '🇨🇻',
  '🇨🇼',
  '🇨🇽',
  '🇨🇾',
  '🇨🇿',
  '🇩🇪',
  '🇩🇬',
  '🇩🇯',
  '🇩🇰',
  '🇩🇲',
  '🇩🇴',
  '🇩🇿',
  '🇪🇦',
  '🇪🇨',
  '🇪🇪',
  '🇪🇬',
  '🇪🇭',
  '🇪🇷',
  '🇪🇸',
  '🇪🇹',
  '🇪🇺',
  '🇫🇮',
  '🇫🇯',
  '🇫🇰',
  '🇫🇲',
  '🇫🇴',
  '🇫🇷',
  '🇬🇦',
  '🇬🇧',
  '🇬🇩',
  '🇬🇪',
  '🇬🇫',
  '🇬🇬',
  '🇬🇭',
  '🇬🇮',
  '🇬🇱',
  '🇬🇲',
  '🇬🇳',
  '🇬🇵',
  '🇬🇶',
  '🇬🇷',
  '🇬🇸',
  '🇬🇹',
  '🇬🇺',
  '🇬🇼',
  '🇬🇾',
  '🇭🇰',
  '🇭🇲',
  '🇭🇳',
  '🇭🇷',
  '🇭🇹',
  '🇭🇺',
  '🇮🇨',
  '🇮🇩',
  '🇮🇪',
  '🇮🇱',
  '🇮🇲',
  '🇮🇳',
  '🇮🇴',
  '🇮🇶',
  '🇮🇷',
  '🇮🇸',
  '🇮🇹',
  '🇯🇪',
  '🇯🇲',
  '🇯🇴',
  '🇯🇵',
  '🇰🇪',
  '🇰🇬',
  '🇰🇭',
  '🇰🇮',
  '🇰🇲',
  '🇰🇳',
  '🇰🇵',
  '🇰🇷',
  '🇰🇼',
  '🇰🇾',
  '🇰🇿',
  '🇱🇦',
  '🇱🇧',
  '🇱🇨',
  '🇱🇮',
  '🇱🇰',
  '🇱🇷',
  '🇱🇸',
  '🇱🇹',
  '🇱🇺',
  '🇱🇻',
  '🇱🇾',
  '🇲🇦',
  '🇲🇨',
  '🇲🇩',
  '🇲🇪',
  '🇲🇫',
  '🇲🇬',
  '🇲🇭',
  '🇲🇰',
  '🇲🇱',
  '🇲🇲',
  '🇲🇳',
  '🇲🇴',
  '🇲🇵',
  '🇲🇶',
  '🇲🇷',
  '🇲🇸',
  '🇲🇹',
  '🇲🇺',
  '🇲🇻',
  '🇲🇼',
  '🇲🇽',
  '🇲🇾',
  '🇲🇿',
  '🇳🇦',
  '🇳🇨',
  '🇳🇪',
  '🇳🇫',
  '🇳🇬',
  '🇳🇮',
  '🇳🇱',
  '🇳🇴',
  '🇳🇵',
  '🇳🇷',
  '🇳🇺',
  '🇳🇿',
  '🇴🇲',
  '🇵🇦',
  '🇵🇪',
  '🇵🇫',
  '🇵🇬',
  '🇵🇭',
  '🇵🇰',
  '🇵🇱',
  '🇵🇲',
  '🇵🇳',
  '🇵🇷',
  '🇵🇸',
  '🇵🇹',
  '🇵🇼',
  '🇵🇾',
  '🇶🇦',
  '🇷🇪',
  '🇷🇴',
  '🇷🇸',
  '🇷🇺',
  '🇷🇼',
  '🇸🇦',
  '🇸🇧',
  '🇸🇨',
  '🇸🇩',
  '🇸🇪',
  '🇸🇬',
  '🇸🇭',
  '🇸🇮',
  '🇸🇯',
  '🇸🇰',
  '🇸🇱',
  '🇸🇲',
  '🇸🇳',
  '🇸🇴',
  '🇸🇷',
  '🇸🇸',
  '🇸🇹',
  '🇸🇻',
  '🇸🇽',
  '🇸🇾',
  '🇸🇿',
  '🇹🇦',
  '🇹🇨',
  '🇹🇩',
  '🇹🇫',
  '🇹🇬',
  '🇹🇭',
  '🇹🇯',
  '🇹🇰',
  '🇹🇱',
  '🇹🇲',
  '🇹🇳',
  '🇹🇴',
  '🇹🇷',
  '🇹🇹',
  '🇹🇻',
  '🇹🇼',
  '🇹🇿',
  '🇺🇦',
  '🇺🇬',
  '🇺🇲',
  '🇺🇳',
  '🇺🇸',
  '🇺🇾',
  '🇺🇿',
  '🇻🇦',
  '🇻🇨',
  '🇻🇪',
  '🇻🇬',
  '🇻🇮',
  '🇻🇳',
  '🇻🇺',
  '🇼🇫',
  '🇼🇸',
  '🇽🇰',
  '🇾🇪',
  '🇾🇹',
  '🇿🇦',
  '🇿🇲',
  '🇿🇼',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
];
