import type { UserType } from '../types/site'

export const userTypes: UserType[] = [
  {
    title: 'عميل',
    description: 'اطلب توصيل أو أرسل طلبك داخل الكويت بسهولة.',
    action: 'ابدأ كعميل',
  },
  {
    title: 'مندوب',
    description: 'استقبل طلبات التوصيل ونفّذها داخل الكويت.',
    action: 'سجّل كمندوب',
  },
]

export const platformFeatures = [
  'دعم العربية واتجاه RTL',
  'مصمم للموبايل أولًا',
  'مخصص للكويت فقط',
  'قابل للتوسع للدفع والتتبع لاحقًا',
]

export const navigationLinks = [
  {
    label: 'الرئيسية',
    href: '/',
  },
  {
    label: 'اختيار الحساب',
    href: '/user-type',
  },
  {
    label: 'طلب توصيل',
    href: '/delivery-request',
  },
  {
    label: 'تتبع الطلب',
    href: '/track-order',
  },
  {
    label: 'الأسعار',
    href: '/pricing',
  },
  {
    label: 'الدعم',
    href: '/support',
  },
  {
    label: 'الخصوصية',
    href: '/privacy-policy',
  },
  {
    label: 'الشروط',
    href: '/terms',
  },
  {
    label: 'حالة المشروع',
    href: '/project-status',
  },
]