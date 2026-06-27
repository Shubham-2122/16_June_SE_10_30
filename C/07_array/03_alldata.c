#include<stdio.h>
#include<conio.h>

void main()
{
//	index    =   0, 1, 2, 3, 4 
	int a[5] = {10,20,30,40,50};
	int i;	

//	all data
	for(i=0;i<5;i++){
//		printf("%d\n",i);
//		printf("%d\n",a[i]);
		printf("a[%d] : %d\n",i,a[i]);
	}

	
	getch();
}
